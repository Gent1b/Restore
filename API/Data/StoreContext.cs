using System;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public DbSet<Product> Products { get; set; }
    public required DbSet<Basket> Baskets { get; set; }


    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>()
        .HasData(
            new IdentityRole { Id = "ad3b7a15-579c-4aba-baf6-8e6a7089cdd4", Name = "Member", NormalizedName = "MEMBER" },
            new IdentityRole { Id = "d40bb8e2-5d7c-4339-8fc1-4529769d2a2f", Name = "Admin", NormalizedName = "ADMIN" }

        );
    }
    
}
