namespace HillarysHairSalon.Models.DTOs;

public class AppointmentDTO
{
    public int Id { get; set; }
    
    public int StylistId { get; set; }
    public Stylist Stylist { get; set; }
    public int CustomerId { get; set; }
    public Customer Customer { get; set; }
    
    public DateTime ScheduledFor { get; set; }
}