using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace NG_Core_Auth.Models
{
    public class CheckOutModel
    {
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        [MaxLength(150)]
        public string Delivery_Address { get; set; }

        [Required]
        public Int32 Phone { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MaxLength(150)]
        public string Special_Greetings { get; set; }

        [Required]
        public double TotalAmount { get; set; }

        [ForeignKey("CartId")]
        public virtual CartModel Products { get; set; }
    }
}
