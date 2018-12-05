using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using dotnetEtalon.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Net;
using Microsoft.AspNetCore.Authorization;


namespace WebApplication
{
    [Route("api/[controller]")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true, Duration = -1)]
    public class CompaniesController : Controller
    {
        private DataBaseDotnetCoreContext _context;

        public CompaniesController(DataBaseDotnetCoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<dynamic> Get()
        {
            return _context.Company.ToList();
        }
        [HttpGet]
        [AllowAnonymous]
        [Route("getpaged")]
        public JsonResult GetCompaniesPages(string Skip, string Take)
        {

            var data = _context.Company.OrderByDescending(x=>x.Id).Skip(Convert.ToInt32(Skip)).Take(Convert.ToInt32(Take));
            int count = _context.Company.Count();

            return new JsonResult(new { Count = count, CompanyList = data });
        }


        [HttpPost]
        public string Post([FromBody] Company Company)
        {
            Response.StatusCode = 200;

            try
            {
                dotnetEtalon.Models.Company newCompany = new Company();
                newCompany.Name = Company.Name;
                newCompany.Address = Company.Address;
                newCompany.Bik = Company.Bik;
                newCompany.Email = Company.Email;
                newCompany.Ks = Company.Ks;
                newCompany.Name = Company.Name;
                newCompany.Rs = Company.Rs;



                _context.Company.Add(newCompany);
                _context.SaveChanges();

            }
            catch (Exception e)
            {
                Response.StatusCode = 400;
                return e.ToString();
            }
            return "OK";
        }
        [HttpPut]
        public string Put([FromBody] Company Company)
        {
            Response.StatusCode = 200;

            try
            {

                Company.Name = Company.Name;
                Company.Address = Company.Address;
                Company.Bik = Company.Bik;
                Company.Email = Company.Email;
                Company.Ks = Company.Ks;
                Company.Name = Company.Name;
                Company.Rs = Company.Rs;

                _context.Company.Attach(Company);
                _context.Entry(Company).State = EntityState.Modified;
                _context.SaveChanges();

            }
            catch (Exception e)
            {
                Response.StatusCode = 400;
                return e.ToString();
            }
            return "OK";
        }

        [HttpDelete]
        public String Delete(int id)
        {
            Response.StatusCode = 200;

            try
            {
                dotnetEtalon.Models.Company newCompany = new Company();
                newCompany.Id = id;
                _context.Company.Remove(newCompany);
                _context.SaveChanges();

            }
            catch (Exception e)
            {
                return e.ToString();
            }
            return "OK";
        }
    }
}