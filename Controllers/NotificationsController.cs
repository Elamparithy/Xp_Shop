﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace NG_Core_Auth.Controllers
{
    public class NotificationsController : Controller
    {
        public IActionResult EmailConfirmed(string userId, string code) 
        {
            if (string.IsNullOrWhiteSpace(userId) || string.IsNullOrWhiteSpace(code))
            {
                return Redirect("/login");

            }


            return View();
         }
    }
}
