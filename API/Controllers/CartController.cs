using API.Data;
using API.DTO;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CartController : ControllerBase
{
    private readonly DataContext _context;

    public CartController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<CartDTO>> GetCart()
    {
        var cart = await GetOrCreateCart();

        return CartToDTO(cart);
    }

    [HttpPost]
    public async Task<ActionResult> AddItemToCart(int productId, int quantity)
    {
        var cart = await GetOrCreateCart();

        var product = await _context.Products.FirstOrDefaultAsync(p => p.Id == productId);
        if (product == null)
        {
            return NotFound("Product not found");
        }
        cart.AddItem(product, quantity);

        var result = await _context.SaveChangesAsync() > 0;

        if (result)
        {
            return CreatedAtAction(nameof(GetCart), CartToDTO(cart));
        }
        return BadRequest(new ProblemDetails
        {
            Title = "Error adding item to cart",
            Detail = "An error occurred while trying to add the item to the cart."
        });

    }

    [HttpDelete]
    public async Task<ActionResult> DeleteItemFromCart(int productId, int quantity)
    {
        var cart = await GetOrCreateCart();

        var product = await _context.Products.Where(p => p.Id == productId).FirstOrDefaultAsync();
        if (product == null)
        {
            return NotFound("Product not found");
        }
        cart.DeleteItem(productId, quantity);
        var result = await _context.SaveChangesAsync() > 0;
        if (result)
        {

            return Ok();
        }
        else
        {
            return BadRequest(new ProblemDetails
            {
                Title = "Error deleting item from cart",
                Detail = "An error occurred while trying to delete the item from the cart."
            });
        }
    }

    private async Task<Cart> GetOrCreateCart()
    {
        var cart = await _context.Carts
            .Include(c => c.CartItems)
            .ThenInclude(ci => ci.Product)
            .Where(cu => cu.CustomerId == Request.Cookies["customerId"])
            .FirstOrDefaultAsync();

        if (cart == null)
        {
            var customerId = Guid.NewGuid().ToString();

            var cookieOptions = new CookieOptions
            {
                Expires = DateTime.Now.AddMonths(1),
                IsEssential = true
            };

            Response.Cookies.Append("customerId", customerId, cookieOptions);
            cart = new Cart { CustomerId = customerId };

            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();
        }

        return cart;
    }

    private CartDTO CartToDTO(Cart cart)
    {
        return new CartDTO
        {
            CartId = cart.CartId,
            CustomerId = cart.CustomerId,
            CartItems = cart.CartItems.Select(ci => new CartItemDTO
            {
                ProductId = ci.Product.Id,
                Name = ci.Product.Name,
                Price = ci.Product.Price,
                ImageUrl = ci.Product.ImageUrl,
                Quantity = ci.Quantity
            }).ToList()

        };

         
    }


}