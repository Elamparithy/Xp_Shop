using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NG_Core_Auth.Data;
using NG_Core_Auth.Models;

namespace NG_Core_Auth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {

        private readonly ApplicationDbContext _ctx;

        public OrderController(ApplicationDbContext ctx)
        {
            _ctx = ctx;
        }
        
        [HttpGet("[action]")]
        [Authorize(Policy = "RequireLoggedIn")]
        public IActionResult GetOrders()
        {
            return Ok(_ctx.Order.ToList());
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AddOrder([FromBody] Order formdata)
        {
            var neworder = new Order
            {
                Id = formdata.Id,
                
                FirstName = formdata.FirstName,
                LastName = formdata.LastName,
                Email = formdata.Email,
                Phonenumber = formdata.Phonenumber,
                Address = formdata.Address,
                city = formdata.city,
                postcode = formdata.postcode,
            
               
            };

            await _ctx.Order.AddAsync(neworder);

            await _ctx.SaveChangesAsync();

            return Ok(new JsonResult("The Product was Ordered Successfully"));

        }

        // POST: api/Order
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Order/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
