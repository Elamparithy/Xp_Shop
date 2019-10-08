using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NG_Core_Auth.Models
{
    public class Order
    {
        public int Id { get; set; }
  
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phonenumber { get; set; }
        public string Address { get; set; }
        public string city { get; set; }
        public string postcode { get; set; }
        
        public ICollection<OrderStock> OrderStocks { get; set; }
    }
}
