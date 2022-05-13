# Simple Duck Studios Landing Page
### Requirements

- Node.js and npm / yarn

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/derrint/simple-duck-studios.git simple-duck-web
cd simple-duck-web
yarn install
```

Then, you can run locally in development mode with live reload:

```
yarn dev
```

Open http://localhost:4100 with your favorite browser to see your project. For your information, Next JS need to take some time to compile the project for your first time.

```
.
├── README.md            # README file
├── next.config.js       # Next JS configuration
├── public               # Public folder
│   └── assets
│       └── images       # Images folder
├── src
│   ├── components       # Reusable components
│   ├── constant         # Constant folder
│   ├── data             # Dummy or static data
│   ├── pages            # Next JS pages
│   ├── styles           # PostCSS style folder with Tailwind
│   ├── templates        # Default template
│   └── utils            # Utility folder
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```
### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your theme is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

