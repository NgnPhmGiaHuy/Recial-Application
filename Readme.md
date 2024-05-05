# Recial Application

Welcome to Recial Application! This application is built using `Next.js`, `React.js`, `Redux`, `TailwindCSS`, `Node.js`, `Express`, `MongoDB`, `Mongoose`, `Firebase`, `WebSocket` and utilizes environment variables with `.env`.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
    - [Clone the Repository](#clone-the-repository)
    - [Set Up Environment Variables](#set-up-environment-variables)
    - [Run the Application](#run-the-application)
    - [Generate Random Data](#generate-random-data)
- [Images](#images)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js and npm - [Install Node.js](https://nodejs.org/)
- MongoDB - [Install MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

Follow these steps to set up and run the application on your local machine.

### Clone the Repository

```bash
git clone https://github.com/NgnPhamGiaHuy/Recial-Application.git
cd Recial-Application
```

### Set Up Environment Variables

Create a new file named .env in the client directory, and add the following placeholders:

```bash
# client/src/.env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

ACCESS_TOKEN_SECRET=your_access_token_secret

NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_CLIENT_URL=http://localhost:3000
NEXT_PUBLIC_WEBSOCKET_URL=ws://localhost:8080

NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

Create a new file named .env in the server directory, and add the following placeholders:
```bash
# server/src/.env

DATABASE_CONNECT_LINK=your_database_connect_link
DATABASE_LOCAL_CONNECT_LINK=your_local_database_connect_link

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

### Run the Application

To run Recial application, follow these steps:

#### Run Next.js Server (Client)

Navigate to the client directory:

```bash
cd client/src

#Install client dependencies:
npm install

#Run the Next.js development server:
npm run dev
```

The client application will be accessible at http://localhost:3000.

Run Node.js Server (Server)

Open a new terminal window/tab, navigate to the server directory:

```bash
cd server/src

#Install server dependencies:
npm install

#Run the Node.js server:
npm start
```

The server will be running at http://localhost:8080.

### Generate Random Data

Once you have successfully started the Node.js server and connected to the database, you have the option to generate random data using the `dataGenerator` function.

1. **Uncomment the `dataGenerator` Function:**

* Open the `server/src/index.js` file and uncomment the `dataGenerator` function. It might look like this:

   ```javascript
   // Uncomment the following line to enable the data generator
   // dataGenerator();
* This script will generate random data and populate your database. Note that the process might take around 10 minutes to complete.

2. **Comment the dataGenerator Function Again:**
Once the data generation is complete, comment the dataGenerator function again in the server/src/index.js file to prevent accidental re-generation in the future. Now, your database should be populated with random data, and you can proceed to use the application with the generated data.

## Images
![Login_Interface](https://github.com/NgnPhamGiaHuy/Recial-Application/assets/84061230/a46f0f30-dc25-4399-aa17-9f37b1cfdc17)
<p align="center"><b>Figure 01:</b> Login Interface</p>

![Register_Interface](https://github.com/NgnPhamGiaHuy/Recial-Application/assets/84061230/43acd1d5-e478-416f-a1a4-9939babac001)
<p align="center"><b>Figure 02:</b> Register Interface</p>

![Landing_Interface](https://github.com/NgnPhamGiaHuy/Recial-Application/assets/84061230/ee41d239-d876-4fff-a07a-4c7b07b16c6c)
<p align="center"><b>Figure 03:</b> Landing Interface</p>

![User_Landing_Interface](https://github.com/NgnPhamGiaHuy/Recial-Application/assets/84061230/5cfb103a-19f0-43d0-917f-2458e5e97109)
<p align="center"><b>Figure 04:</b> User Landing Interface</p>

![Profile_Setting_Interface](https://github.com/NgnPhamGiaHuy/Recial-Application/assets/84061230/66431085-53e2-4e8c-bd19-a5ef6971c7c2)
<p align="center"><b>Figure 05:</b> Profile Setting Interface</p>

![Create_Post_With_Images](https://github.com/NgnPhamGiaHuy/Recial-Application/assets/84061230/5ed81a32-7d77-4b45-a247-16bf9897b6f7)
<p align="center"><b>Figure 06:</b> Create Post With Images</p>

![Friend_Interface](https://github.com/NgnPhamGiaHuy/Recial-Application/assets/84061230/dd7d0603-3cf4-43a2-a8d1-951d045692fa)
<p align="center"><b>Figure 07:</b> Friend Interface</p>

![Friend_Request_Interface](https://github.com/NgnPhamGiaHuy/Recial-Application/assets/84061230/94615be9-bcd1-414b-9d84-d5a20c943dc1)
<p align="center"><b>Figure 08:</b> Friend Request Interface</p>

![Media_Interface](https://github.com/NgnPhamGiaHuy/Recial-Application/assets/84061230/4382b5ea-1ae4-4c81-9825-e50c2b67f259)
<p align="center"><b>Figure 09:</b> Media Interface</p>

![Group_Feed_Interface](https://github.com/NgnPhamGiaHuy/Recial-Application/assets/84061230/4fa33277-4202-46c8-a1fd-f7a8b181679e)
<p align="center"><b>Figure 10:</b> Group Feed Interface</p>

![Group_Join_Interface](https://github.com/NgnPhamGiaHuy/Recial-Application/assets/84061230/5137dc2e-d45e-40a7-87ec-658782bd3d5e)
<p align="center"><b>Figure 11:</b> Group Join Interface</p>

![Group_Interface](https://github.com/NgnPhamGiaHuy/Recial-Application/assets/84061230/5da8a5d7-97bb-42ef-87f8-ea134540e2a4)
<p align="center"><b>Figure 12:</b> Group Interface</p>

![Page_Interface](https://github.com/NgnPhamGiaHuy/Recial-Application/assets/84061230/c38c6cdd-644c-41d4-972d-be0f8a24ae6f)
<p align="center"><b>Figure 13:</b> Page Interface</p>

![Event_Interface](https://github.com/NgnPhamGiaHuy/Recial-Application/assets/84061230/904f4c4b-b4b3-42e3-9161-bee22ec6f73e)
<p align="center"><b>Figure 14:</b> Event Interface</p>

![Message_Interface](https://github.com/NgnPhamGiaHuy/Recial-Application/assets/84061230/e34ee458-575f-45bd-9f0f-cb141b53b63a)
<p align="center"><b>Figure 15:</b> Message Interface</p>

![Setting_Interface](https://github.com/NgnPhamGiaHuy/Recial-Application/assets/84061230/10fdfb6c-b432-4c23-be12-5639b2f8339b)
<p align="center"><b>Figure 16:</b> Setting Interface</p>

## License

This project is privately owned by `NgnPhmGiaHuy` and is intended for personal use only. Unauthorized copying or reproduction of this project, in whole or in part, is strictly prohibited.

If you have any inquiries or would like to discuss the use of this project for purposes other than personal use, please contact the project owner at [`yuh.nguyenpham@gmail.com`].
