using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using dotnetEtalon.Models;
using PaperSource.AspNetCoreAuthorization.Services.Permissions;

namespace WebApplication.Controllers
{
    public class AdminController : Controller
    {
      

        [AuthorizePermission(Permission.edit)]
        public IActionResult Index()
        {
            //if (User.Identity.IsAuthenticated)
            //{
            //    return Content(User.Identity.Name);
            //}

            return View();
        }

        [AuthorizePermission(Permission.edit)]
        public IActionResult Users()
        {

            return View();
        }

        [AuthorizePermission(Permission.edit)]
        public IActionResult Products()
        {

            return View();
        }

        [AuthorizePermission(Permission.edit)]
        public IActionResult Companies()
        {

            return View();
        }


    }
}
