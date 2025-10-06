namespace API.Exceptions;

public class ApiException (int statusCode, string massage, string? details)
{
    public int StatusCode { get; set; } = statusCode;
    public string Message { get; set; } = massage;
    public string? Details { get; set; } = details;

}