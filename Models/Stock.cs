using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NG_Core_Auth.Models
{
    public class Stock
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int ProductId { get; set; }
        public ProductModel product { get; set; }
        public ICollection<OrderStock> OrderStocks { get; set; }
    }
}
