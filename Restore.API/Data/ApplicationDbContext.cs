using Microsoft.EntityFrameworkCore;
using Restore.API.Models;

namespace Restore.API.Data;

public class ApplicationDbContext :DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }
    public DbSet<Product> Products { get; set; }
}