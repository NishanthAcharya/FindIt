# FindIt – Lost & Found Portal

A simple React-based Lost & Found web application that helps students report lost belongings and find items reported by others on campus.

## Features

- Report lost or found items
- Upload item images
- Categorize items
- Filter items by category
- Search items by name
- View item location and contact number
- Delete item reports
- Save reports using LocalStorage

## Preview

![FindIt Preview](./Screenshot%202026-11-24%20220320.png)

## Tech Stack

- React JS
- JavaScript
- HTML
- CSS
- Vite
- LocalStorage

## How It Works

Users can report lost or found items by entering details such as item name, category, status, location, date, description, mobile number, and image.

Reported items are displayed as cards. Users can search for items, filter them by category, and delete reports.

The application uses LocalStorage to save reports in the browser, so the data remains available after refreshing the page on the same browser.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/FindIt.git
```

### 2. Navigate to the project folder

```bash
cd FindIt
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal to use the application.

## Limitations

- Data is stored locally in the browser using LocalStorage.
- Reports are not shared between different users or devices.
- Clearing browser storage will remove saved reports.

## Future Improvements

- Shared database for reports
- User authentication
- Edit item reports
- Detailed item view
- Improved responsive design

## Author

**Nishanth P**

GitHub: [NishanthAcharya](https://github.com/NishanthAcharya)
