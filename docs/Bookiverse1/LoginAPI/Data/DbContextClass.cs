using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using LoginAPI.Model;
using Microsoft.EntityFrameworkCore.SqlServer;
namespace LoginAPI.Data
{
    public class DbContextClass : DbContext
    {
        public DbContextClass(DbContextOptions<DbContextClass> options) : base(options)
        {
            //options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
        }

        public DbSet<User> Users { get; set; }
    }
}