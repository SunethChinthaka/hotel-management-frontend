import axios from "axios";

// Create an instance of axios with base URL for API requests
export const api = axios.create({
  baseURL: "http://localhost:9192/api/v1/rooms",
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
  const response = await api.post("", formData);
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
    const response = await api.get("/room-types");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching room types");
  }
}
