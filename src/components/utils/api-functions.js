import axios from "axios";

// Create an instance of axios with base URL for API requests
export const api = axios.create({
  baseURL: "http://localhost:9192/api/v1",
  // baseURL: "http://localhost:9192",
});

// Function to add a new room
export async function addRoom(photo, roomType, roomPrice) {
  // Create a new FormData object to send data as multipart/form-data
  const formData = new FormData();
  formData.append("photo", photo), // Append photo to form data
    formData.append("roomType", roomType), // Append room type to form data
    formData.append("roomPrice", roomPrice); // Append room price to form data

  // Send a POST request to add a new room with provided data
  const response = await api.post("/rooms", formData);
  if (response.status === 201) {
    return true;
  } else {
    return false;
  }
}

// Function to fetch room types from the server
export async function getRoomTypes() {
  try {
    // Send a GET request to fetch room types
    const response = await api.get("/rooms/room-types");
    return response.data;
  } catch (error) {
    throw new Error("Error occurred while fetching room types");
  }
}

// Function to fetch all rooms from the server
export async function getAllRooms() {
  try {
    // Send a GET request to fetch all rooms
    const result = await api.get("/rooms");
    return result.data;
  } catch (error) {
    throw new Error("Error occurred while fetching rooms");
  }
}

// Function to delete room from the server
export async function deleteRoom(roomId) {
  try {
    const result = await api.delete(`/rooms/${roomId}`);
    return result.data;
  } catch (error) {
    throw new Error(`Error occurred while deleting room ${error.message}`);
  }
}

// Function to edit room from the server
export async function updateRoom(roomId, roomData) {
  const formData = new FormData();
  formData.append("roomType", roomData.roomType);
  formData.append("roomPrice", roomData.roomPrice);
  formData.append("photo", roomData.photo);
  const response = await api.put(`/rooms/${roomId}`, formData);
  return response;
}

// Function to get room by id from the server
export async function getRoomById(roomId) {
  try {
    const result = await api.get(`/rooms/${roomId}`);
    return result.data;
  } catch (error) {
    throw new Error(`Error occurred while fetching room ${error.message}`);
  }
}

// Functions to book a room
export async function bookRoom(roomId, booking) {
  try {
    const response = await api.post(`/bookings/${roomId}/booking`, booking);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(`Error occured while booking room : ${error.message}`);
    }
  }
}

// Function to get all bookings
export async function getAllBookings() {
  try {
    const result = await api.get("/bookings");
    return result.data;
  } catch (error) {
    throw new Error(`Error fetching bookings : ${error.message}`);
  }
}

// Function to get the bookings by confirmation code
export async function getBookingByConfirmationCode(confirmationCode) {
  try {
    const result = await api.get(`/bookings/${confirmationCode}`);
    return result.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(`Error occured while find booking : ${error.message}`);
    }
  }
}

// Function to cancel the booking
export async function cancelBooking(bookingId) {
  try {
    const result = await api.delete(`/bookings/${bookingId}`);
    return result.data;
  } catch (error) {
    throw new Error(`Error occured while cancelling booking :${error.message}`);
  }
}
