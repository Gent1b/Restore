using System;

namespace API.DTOs;

public class BasketDTO
{
    public required string BasketId { get; set; }
    public List<BasketItemDTO> Items { get; set; } = [];
}
