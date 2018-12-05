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
    public class HomeController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}


        public IActionResult Index()
        {
            //if (User.Identity.IsAuthenticated)
            //{
            //    return Content(User.Identity.Name);
            //}

            return View();
        }

        [AuthorizePermission(Permission.permissionSpecialSections)]
        public IActionResult Restricted()
        {


            return View();
        }

        public IActionResult Companies()
        {

            return View();
        }

        public IActionResult Products()
        {

            return View();
        }



        public IActionResult About()
        {
            return Content("Authorized");
        }

        
        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        
       
        public IActionResult Error()
        {
            return View();
        }
    }
}
