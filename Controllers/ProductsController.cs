using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using dotnetEtalon.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace WebApplication
{
    [Route("api/[controller]")]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true, Duration = -1)] 
    public class ProductsController : Controller
    {
        private DataBaseDotnetCoreContext _context; 

           public ProductsController(DataBaseDotnetCoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<dynamic> Get()
        {
                return _context.Product.ToList();
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("getpaged")]
        public JsonResult GetCompaniesPages(string Skip, string Take)
        {

            var data = _context.Product.OrderByDescending(x => x.Id).Skip(Convert.ToInt32(Skip)).Take(Convert.ToInt32(Take));
            int count = _context.Product.Count();

            return new JsonResult(new { Count = count, ProductList = data });
        }

        [HttpPost]
        public string Post([FromBody] Product product)
        {
            Response.StatusCode = 200;
    
            try{
                    dotnetEtalon.Models.Product newProduct = new Product();
                    newProduct.Name = product.Name; 
                    newProduct.Description= product.Description; 
                     _context.Product.Add(newProduct);
                     _context.SaveChanges();
              
            }catch(Exception e){
                Response.StatusCode = 400;
                return e.ToString();
            }
            return "OK";
        }
        [HttpPut]
        public string Put([FromBody] Product product)
        {
            Response.StatusCode = 200;
    
            try{
                   
                    product.Name = product.Name; 
                    product.Description= product.Description; 
                     _context.Product.Attach(product);
                      _context.Entry(product).State = EntityState.Modified;
                     _context.SaveChanges();
              
            }catch(Exception e){
                Response.StatusCode = 400;
                return e.ToString();
            }
            return "OK";
        }

        [HttpDelete]
        public String Delete(int id)
        {
            Response.StatusCode = 200;
              
            try{
                    dotnetEtalon.Models.Product newProduct = new Product();
                    newProduct.Id = id; 
                    _context.Product.Remove(newProduct);
                     _context.SaveChanges();
        
            }catch(Exception e){
                 return e.ToString();
            }
            return "OK";
        }
        
    }
}