using HillarysHairSalon.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Http.Json;
using HillarysHairSalon.Models.DTOs;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

builder.Services.AddNpgsql<HillarysHairSalonDbContext>(builder.Configuration["HillarysHairSalonConnectionString"]);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/api/stylists", (HillarysHairSalonDbContext db) =>
{
    return db.Stylists
    .Select(s => new StylistDTO
    {
        Id = s.Id,
        FirstName = s.FirstName,
        LastName = s.LastName,
        isActive = s.isActive
    }).ToList();
});

app.MapGet("/api/customers", (HillarysHairSalonDbContext db) =>
{
    return db.Customers
    .Select(s => new CustomerDTO
    {
        Id = s.Id,
        FirstName = s.FirstName,
        LastName = s.LastName,
    }).ToList();
});

app.MapGet("/api/appointments", (HillarysHairSalonDbContext db) =>
{
    return db.Appointments
    .Include(a => a.Stylist)
    .Include(a => a.Customer)
    .Include(a => a.AppointmentServices)
        .ThenInclude(ap => ap.Service)
    .Select(a => new AppointmentDTO
    {
        Id = a.Id,
        StylistId = a.StylistId,
        Stylist = new StylistDTO
        {
            Id = a.Stylist.Id,
            FirstName = a.Stylist.FirstName,
            LastName = a.Stylist.LastName
        },
        CustomerId = a.CustomerId,
        Customer = new CustomerDTO
        {
            Id = a.Customer.Id,
            FirstName = a.Customer.FirstName,
            LastName = a.Customer.LastName
        },
        ScheduledFor = a.ScheduledFor,
        Services = a.AppointmentServices
                    .Select(ap => new ServiceDTO
                    {
                        Id = ap.Service.Id,
                        Name = ap.Service.Name,
                        Price = ap.Service.Price
                    }).ToList()
    })
    .ToList();
});


app.Run();

