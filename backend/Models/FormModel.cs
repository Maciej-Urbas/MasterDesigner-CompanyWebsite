using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Forms
    {
        [Key]
        public long Id { get; set; }
        public string? Name { get; set; }
        public string? Topic { get; set; }
        public string? Email { get; set; }
        public string? Message { get; set; }
        public string? Ip { get; set; }
    }
}