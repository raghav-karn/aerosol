# 🌬️ Aerosol 🚬

![Aerosol Icon](extension/icon128.png)

**Aerosol** is a Chrome extension that visualizes air pollution in a way everyone understands - cigarettes! Download now from the Chrome Web Store.

> [!WARNING]
> Although AQI and Equivalent Cigarettes data gives a wider view, the reliability of data is up to OpenWeatherMap and Aerosol's limited Equivalent Cigarette count algorithm. There may be some degree of discrepancy and error when compared to other sources.

>[!CAUTION]
> Since Aerosol's results might differ from other sources, kindly take it with a grain of salt. The extension is meant to provide an overview of Air Quality of a particular city to get the gist of it. Aerosol is not meant for any precise measurement of Air Quality Index or Equivalent Cigarettes count.

> [!NOTE]
> Visit [aerosol.raghavkarn.com](https://aerosol.raghavkarn.com) to learn more about the science behind it and read the instructions on how to install and use Aerosol.

> [!IMPORTANT]
> To contact us, please reach out to [contact@raghavkarn.com](mailto:contact@raghavkarn.com). For help and support, please reach out to [help@raghavkarn.com](mailto:help@raghavkarn.com). Send us your precious feedback at [feedback@raghavkarn.com](mailto:feedback@raghavkarn.com) or on the Chrome Web Store.


## 🤔 What's This All About?

Ever wondered how bad the air pollution in your city really is? Air Quality Index (AQI) numbers can be abstract and hard to grasp. **Aerosol** translates these numbers into something more tangible - the equivalent number of cigarettes you're "smoking" just by breathing the air.

## 📸 Preview
![Preview1](images/preview1.png)
![Preview2](images/preview2.png)

## ✨ Features

- 🔍 **AQI Search for cities**: Look up for the AQI of any city arounf the world!
- 📊 **Cigarettes counter**: See the equivalent "cigarette count" of the AQI of any city.
- 🌎 **Global Coverage**: Works with AQI data from basically all the cities. Thanks, OpenWeatherMap API.

## 🚀 Installation

1. Download the latest .zip file from either the Releases, the `<version>.zip` file in the root of [the repo](https://github.com/raghav-karn/aerosol) or use the files in [`/extension`](https://github.com/raghav-karn/aerosol/tree/main/extension) folder of the repo.
![Step 1](images/dwd1.png)
2. Unzip the file in a location of choice on your computer.
![Step 2](images/dwd2.png)
3. Open Chrome or any other Chromium-based browser and open the extensions page (`chrome://extensions`).
![Step 3](images/dwd3.png)
4. Enable `Developer mode`, click `Load unpacked` and select the folder with the contents of unzipped `aerosol.zip` file.
![Step 4](images/dwd4.png)
5. There you have it—Aerosol has been installed on your browser. Enjoy!

## 💡 How to Use

### 1️⃣ Toggle the extension
![Step 1](images/step1.png)

### 2️⃣ Enter the name of the city you want to look up for, and hit Enter
![Step 2](images/step2.png)

### 3️⃣ View your 'Air Quality Index' and 'Equivalent Cigarettes'
![Step 3](images/step3.png)

## 🛠️ Made Using

- 🌐 HTML
- 🎨 CSS
- 📊 JS
- ☁  AQI data from [OpenWeatherMap](https://openweathermap.org)

## 🤝 Contributing & Feedbacks
Your feedback and help matters! If you have any feature suggestion or have found a bug, please raise the issue on this repo. Also, Check out our [CONTRIBUTING.md](https://github.com/raghav-karn/.github/blob/main/CONTRIBUTING.md) for detailed guidelines. All contributions are welcome!

## Credits

- **OpenWeatherMap**'s API was used to provide data on AQI.
- **Claude.ai** was partially used to write the code to help process the data abdnd convert the calculated AQI to Equivalent Cigarettes.
- **Figma** was used to create the icons.
- **Hack Club** funded Aerosol to get on Chrome Web Store.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Aerosol by [Raghav Karn](https://github.com/raghav-karn).
- Extension made for [BrowserBuddy](https://browserbuddy.hackclub.com).
- Website made for [Swirl](https://swirl.hackclub.com).