using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {

    }
    public DbSet<Product> Products { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>().HasData(
            new List<Product>
            {
                new Product { Id = 1, Name = "Product 1", Description = "Description for Product 1", Price = 10.99m,
                IsActive = true, ImageUrl = "1.jpg", Stock = 100 },
                new Product { Id = 2, Name = "Product 2", Description = "Description for Product 2", Price = 20.99m,
                IsActive = true, ImageUrl = "2.jpg", Stock = 50 },
                new Product { Id = 3, Name = "Product 3", Description = "Description for Product 3", Price = 30.99m,
                IsActive = true, ImageUrl = "3.jpg", Stock = 25 },
                new Product { Id = 4, Name = "Product 4", Description = "Description for Product 4", Price = 40.99m,
                IsActive = true, ImageUrl = "4.jpg", Stock = 75 }               
            }
        );
    }
}