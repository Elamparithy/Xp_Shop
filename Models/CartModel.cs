using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NG_Core_Auth.Models
{
    public class CartModel
    {
        [Key]
        [Required]
        public int CartId { get; set; }

        [Display(Name = "Product")]
        public int ProductId { get; set; }

        [ForeignKey("ProductId")]
        public virtual ProductModel Products { get; set; }
    
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }


        [Required]
        [MaxLength(150)]
        public string Description { get; set; }

        [Required]
        public double Price { get; set; }
    }
}
