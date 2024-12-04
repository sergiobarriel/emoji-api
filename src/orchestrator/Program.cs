var builder = WebApplication.CreateBuilder(args);

builder.WebHost.UseUrls("http://*:80");

builder.Services.AddOpenApi();

var application = builder.Build();

application.UseHttpsRedirection();

application.MapFallback(async (context) =>
{
    Console.WriteLine($"✉️ request received at: {DateTime.UtcNow.ToString("G")}");

    var animal = await GetEmojiAsync(url: Environment.GetEnvironmentVariable("ANIMALS_URL"));
    var food = await GetEmojiAsync(url: Environment.GetEnvironmentVariable("FOODS_URL"));
    var sport = await GetEmojiAsync(url: Environment.GetEnvironmentVariable("SPORTS_URL"));

    context.Response.Headers.Append("Content-Encoding", "utf-8");
    context.Response.ContentType = "text/plain";
    await context.Response.WriteAsync($"{animal} {food} {sport}");
});


application.Lifetime.ApplicationStarted.Register(() => Console.WriteLine("🎶 running on port 80"));

await application.RunAsync();

static async Task<string> GetEmojiAsync(string url)
{
    if(string.IsNullOrEmpty(url)) { throw new Exception($"❌ {nameof(url)} is empty!"); }

    var httpClient = new HttpClient();

    var response = await httpClient.GetAsync(url);

    return await response.Content.ReadAsStringAsync();

}