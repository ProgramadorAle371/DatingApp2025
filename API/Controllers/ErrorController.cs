using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ErrorController : BaseApiController
{
    [HttpGet("bad-request")]
    public IActionResult GetBadRequest() //401
    {
        var inputParm = -1;
        if (inputParm <= 0) throw new ArgumentOutOfRangeException(nameof(inputParm));
        
        return BadRequest("Bad request");
    }

    [HttpGet("auth")]
    public IActionResult GetAuth() //401
    {
        return Unauthorized();
    }

    [HttpGet("not-found")]
    public IActionResult GetNotFound() //404
    {
        return NotFound();
    }


    [HttpGet("server-error")]
    public IActionResult GetServerError() //500
    {
        throw new Exception("This is a server error");
    }
}