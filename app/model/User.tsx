interface UserModel {
    id: string;              // Unique identifier for the user
    email: string;           // User's email address
    firstName: string;       // User's first name
    lastName: string;        // User's last name
    profilePictureUrl: string; // URL to the user's profile picture
    createdAt: Date;         // Timestamp of when the user account was created
    updatedAt: Date;         // Timestamp of the last update to the user account
    lastLogin: Date;  
    language: string;
    insuranceProvider:string;
    insurance:string;       // Timestamp of the last time the user logged in
  
    // Additional fields can be added here based on your application's needs.
  }