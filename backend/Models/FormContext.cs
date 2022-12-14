using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class FormContext : DbContext
    {
        public FormContext(DbContextOptions<FormContext> options) 
            : base(options)
        {
        }
        
        public DbSet<Forms> forms { get; set; } = null!;
    }
}