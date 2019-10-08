using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using NG_Core_Auth.Models;

namespace NG_Core_Auth.Data
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        // Creatin Roles for or application

        protected override void OnModelCreating(ModelBuilder builder) 
        {
            base.OnModelCreating(builder);
            builder.Entity<OrderStock>()
                .HasKey(x => new { x.StockId, x.OrderId });
            builder.Entity<IdentityRole>().HasData(
                    new { Id = "1", Name = "Admin", NormalizedName = "ADMIN" },
                    new { Id = "2", Name = "Customer", NormalizedName = "CUSTOMER" },
                    new { Id = "3", Name = "Moderator", NormalizedName = "MODERATOR" }
                );
        }


        public DbSet<ProductModel> Products { get; set; }

        public DbSet<CartModel> Cart { get; set; }

        public DbSet<Stock> Stock { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<OrderStock> OrderStocks { get; set; }
    }
}
