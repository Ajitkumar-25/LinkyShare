exports.getEmailTemplate = (decryptedLinks) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Download Links from LinkyShare</title>
        <style>
          @import url('https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css');
        </style>
      </head>
      <body class="bg-gray-100 p-6">
        <div class="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <div class="bg-indigo-600 p-4">
            <h1 class="text-white text-2xl font-bold">LinkyShare</h1>
          </div>
          <div class="p-6">
            <h2 class="text-gray-700 text-xl mb-4">Your Download Links</h2>
            <p class="mb-4 text-gray-700">Here are your download links:</p>
            <ul class="list-disc list-inside">
              ${decryptedLinks
                .map(
                  (link) =>
                    `<li class="mb-2"><a href="${link}?fl_attachment" download class="text-indigo-500 hover:underline">Download File</a></li>`
                )
                .join('')}
            </ul>
          </div>
          <div class="bg-gray-100 p-4 text-center">
            <p class="text-gray-600 text-sm">Thank you for using LinkyShare!</p>
            <p class="text-gray-600 text-sm">Visit us at <a href="https://www.linkyshare.com" class="text-indigo-500 hover:underline">LinkyShare.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `;
  };
  