namespace HillarysHairSalon.Models.DTOs;

public class AppointmentServiceDTO
{
    public int Id { get; set; }
    public int AppointmentId { get; set; }
    public AppointmentDTO Appointment { get; set; }
    public int ServiceId { get; set; }
    public Service Service { get; set; }
}