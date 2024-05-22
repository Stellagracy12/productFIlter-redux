import { createSlice,configureStore } from '@reduxjs/toolkit'
const create=createSlice({
  name:"cardfillter",
  initialState:{
    cartarray: [
        {
        id: 1,
        name: "V2A",
        img: "/watch1.jpg",
        img1: "/v1.webp",
        img2: "/v2.jpg",
        img3: "/v3.jpg",
        amt: 2999,
        seller: "Vian International",
        category: "Watch",
        des: "Fashion Sports Watch: Featuring Fashionable Design with Large Dial, This Digital Analog Sports Suits Male of All Ages. Grab This Watch for The Day, Work, Traveling, Shopping, Hanging Out, Walking or Just to Relax In. Pair It with Any Type of Outfit from Casual to Sporty and Everywhere In Between. Wrist Size: 19.0 cm – 26 cm",
        about: {
          about1:
            "Tough and Sturdy: An ideal smartwatch for men and women, Terra is tough and sturdy, stylish and sporty, ready to embark on every adventure.",
          about2:
            "Rotary Functional Crown: The Terra smart watch is designed for your convenience. It eases your tasks for you with the help of a multi functional crown that executes tasks on the go.",
          about3:
            "Bluetooth Calling: With your Terra bluetooth calling smartwatch, calling is more effortless than ever. Make and receive calls, texts all on your wrist without waking your phone. Also the EzyPair technology ensures smooth pairing with your device or your TWS.",
          about4:
            "1.36” Ultra HD Display: Explore a bright, rich 1.39” HD, always on display that brings every detail to life.",
          about5:
            "500 Nits Peak Brightness: Comfortable viewing experience under any lighting conditions.",
        },
      },
      {
        id: 2,
        name: "SKMEI",
        img: "/watch2.jpg",
        img1: "/sk1.jpg",
        img2: "/sk2.jpg",
        img3: "/watch2.jpg",
        amt: 4877,
        seller: "Quartz Technologies",
        category: "Watch",
        des: "Fashion Sports Watch: Featuring Fashionable Design with Large Dial, This Digital Analog Sports Suits Male of All Ages. Grab This Watch for The Day, Work, Traveling, Shopping, Hanging Out, Walking or Just to Relax In. Pair It with Any Type of Outfit from Casual to Sporty and Everywhere In Between. Wrist Size: 19.0 cm – 26 cm",
        about: {
          about1:
            "Tough and Sturdy: An ideal smartwatch for men and women, Terra is tough and sturdy, stylish and sporty, ready to embark on every adventure.",
          about2:
            "Rotary Functional Crown: The Terra smart watch is designed for your convenience. It eases your tasks for you with the help of a multi functional crown that executes tasks on the go.",
          about3:
            "Bluetooth Calling: With your Terra bluetooth calling smartwatch, calling is more effortless than ever. Make and receive calls, texts all on your wrist without waking your phone. Also the EzyPair technology ensures smooth pairing with your device or your TWS.",
          about4:
            "1.36” Ultra HD Display: Explore a bright, rich 1.39” HD, always on display that brings every detail to life.",
          about5:
            "500 Nits Peak Brightness: Comfortable viewing experience under any lighting conditions.",
        },
      },
      {
        id: 3,
        name: "Fire-Boltt",
        img: "/watch3.jpg",
        img1: "/f1.jpg",
        img2: "/f2.webp",
        img3: "/f5.webp",
        amt: 9899,
        seller: "Vian International",
        category: "Watch",
        des: "Fashion Sports Watch: Featuring Fashionable Design with Large Dial, This Digital Analog Sports Suits Male of All Ages. Grab This Watch for The Day, Work, Traveling, Shopping, Hanging Out, Walking or Just to Relax In. Pair It with Any Type of Outfit from Casual to Sporty and Everywhere In Between. Wrist Size: 19.0 cm – 26 cm",
        about: {
          about1:
            "Tough and Sturdy: An ideal smartwatch for men and women, Terra is tough and sturdy, stylish and sporty, ready to embark on every adventure.",
          about2:
            "Rotary Functional Crown: The Terra smart watch is designed for your convenience. It eases your tasks for you with the help of a multi functional crown that executes tasks on the go.",
          about3:
            "Bluetooth Calling: With your Terra bluetooth calling smartwatch, calling is more effortless than ever. Make and receive calls, texts all on your wrist without waking your phone. Also the EzyPair technology ensures smooth pairing with your device or your TWS.",
          about4:
            "1.36” Ultra HD Display: Explore a bright, rich 1.39” HD, always on display that brings every detail to life.",
          about5:
            "500 Nits Peak Brightness: Comfortable viewing experience under any lighting conditions.",
        },
      },
      {
        id: 4,
        name: "Shocknshop",
        img: "/watch4.jpg",
        img1: "/s1.jpg",
        img2: "/s2.webp",
        img3: "/s3.jpg",
        amt: 22899,
        seller: "Quartz Technologies",
        category: "Watch",
        des: "Fashion Sports Watch: Featuring Fashionable Design with Large Dial, This Digital Analog Sports Suits Male of All Ages. Grab This Watch for The Day, Work, Traveling, Shopping, Hanging Out, Walking or Just to Relax In. Pair It with Any Type of Outfit from Casual to Sporty and Everywhere In Between. Wrist Size: 19.0 cm – 26 cm",
        about: {
          about1:
            "Tough and Sturdy: An ideal smartwatch for men and women, Terra is tough and sturdy, stylish and sporty, ready to embark on every adventure.",
          about2:
            "Rotary Functional Crown: The Terra smart watch is designed for your convenience. It eases your tasks for you with the help of a multi functional crown that executes tasks on the go.",
          about3:
            "Bluetooth Calling: With your Terra bluetooth calling smartwatch, calling is more effortless than ever. Make and receive calls, texts all on your wrist without waking your phone. Also the EzyPair technology ensures smooth pairing with your device or your TWS.",
          about4:
            "1.36” Ultra HD Display: Explore a bright, rich 1.39” HD, always on display that brings every detail to life.",
          about5:
            "500 Nits Peak Brightness: Comfortable viewing experience under any lighting conditions.",
        },
      },
      {
        id: 5,
        name: "beatXP",
        img: "/watch5.jpg",
        img1: "/b1.webp",
        img2: "/b2.webp",
        img3: "/b3.webp",
        amt: 1799,
        seller: "Vian International",
        category: "Watch",
        des: "Fashion Sports Watch: Featuring Fashionable Design with Large Dial, This Digital Analog Sports Suits Male of All Ages. Grab This Watch for The Day, Work, Traveling, Shopping, Hanging Out, Walking or Just to Relax In. Pair It with Any Type of Outfit from Casual to Sporty and Everywhere In Between. Wrist Size: 19.0 cm – 26 cm",
        about: {
          about1:
            "Tough and Sturdy: An ideal smartwatch for men and women, Terra is tough and sturdy, stylish and sporty, ready to embark on every adventure.",
          about2:
            "Rotary Functional Crown: The Terra smart watch is designed for your convenience. It eases your tasks for you with the help of a multi functional crown that executes tasks on the go.",
          about3:
            "Bluetooth Calling: With your Terra bluetooth calling smartwatch, calling is more effortless than ever. Make and receive calls, texts all on your wrist without waking your phone. Also the EzyPair technology ensures smooth pairing with your device or your TWS.",
          about4:
            "1.36” Ultra HD Display: Explore a bright, rich 1.39” HD, always on display that brings every detail to life.",
          about5:
            "500 Nits Peak Brightness: Comfortable viewing experience under any lighting conditions.",
        },
      },
      {
        id: 6,
        name: "MARVIK",
        img: "/watch6.jpg",
        img1: "/m1.webp",
        img2: "/m2.webp",
        img3: "/m3.jpg",
        amt: 2229,
        seller: "Quartz Technologies",
        category: "Watch",
        des: "Fashion Sports Watch: Featuring Fashionable Design with Large Dial, This Digital Analog Sports Suits Male of All Ages. Grab This Watch for The Day, Work, Traveling, Shopping, Hanging Out, Walking or Just to Relax In. Pair It with Any Type of Outfit from Casual to Sporty and Everywhere In Between. Wrist Size: 19.0 cm – 26 cm",
        about:{about1:"Tough and Sturdy: An ideal smartwatch for men and women, Terra is tough and sturdy, stylish and sporty, ready to embark on every adventure.",about2:"Rotary Functional Crown: The Terra smart watch is designed for your convenience. It eases your tasks for you with the help of a multi functional crown that executes tasks on the go.",about3:"Bluetooth Calling: With your Terra bluetooth calling smartwatch, calling is more effortless than ever. Make and receive calls, texts all on your wrist without waking your phone. Also the EzyPair technology ensures smooth pairing with your device or your TWS.",about4:"1.36” Ultra HD Display: Explore a bright, rich 1.39” HD, always on display that brings every detail to life.",about5:"500 Nits Peak Brightness: Comfortable viewing experience under any lighting conditions."}
        
    },
      {
        id: 7,
        name: "Fastrack",
        img: "/watch7.jpg",
        img1: "/fs1.webp",
        img2: "/fs2.webp",
        img3: "/fs3.webp",
        amt: 22999,
        seller: "Vian International",
        category: "Watch",
        des: "Fashion Sports Watch: Featuring Fashionable Design with Large Dial, This Digital Analog Sports Suits Male of All Ages. Grab This Watch for The Day, Work, Traveling, Shopping, Hanging Out, Walking or Just to Relax In. Pair It with Any Type of Outfit from Casual to Sporty and Everywhere In Between. Wrist Size: 19.0 cm – 26 cm",
        about:{about1:"Tough and Sturdy: An ideal smartwatch for men and women, Terra is tough and sturdy, stylish and sporty, ready to embark on every adventure.",about2:"Rotary Functional Crown: The Terra smart watch is designed for your convenience. It eases your tasks for you with the help of a multi functional crown that executes tasks on the go.",about3:"Bluetooth Calling: With your Terra bluetooth calling smartwatch, calling is more effortless than ever. Make and receive calls, texts all on your wrist without waking your phone. Also the EzyPair technology ensures smooth pairing with your device or your TWS.",about4:"1.36” Ultra HD Display: Explore a bright, rich 1.39” HD, always on display that brings every detail to life.",about5:"500 Nits Peak Brightness: Comfortable viewing experience under any lighting conditions."}

      },
      {
        id: 8,
        name: "Kart In Box",
        img: "/watch8.avif",
        img1: "/ca1.jpg",
        img2: "/ca2.jpg",
        img3: "/ca3.webp",
        amt: 15899,
        seller: "Quartz Technologies",
        category: "Watch",
        des: "Fashion Sports Watch: Featuring Fashionable Design with Large Dial, This Digital Analog Sports Suits Male of All Ages. Grab This Watch for The Day, Work, Traveling, Shopping, Hanging Out, Walking or Just to Relax In. Pair It with Any Type of Outfit from Casual to Sporty and Everywhere In Between. Wrist Size: 19.0 cm – 26 cm",
        about:{about1:"Tough and Sturdy: An ideal smartwatch for men and women, Terra is tough and sturdy, stylish and sporty, ready to embark on every adventure.",about2:"Rotary Functional Crown: The Terra smart watch is designed for your convenience. It eases your tasks for you with the help of a multi functional crown that executes tasks on the go.",about3:"Bluetooth Calling: With your Terra bluetooth calling smartwatch, calling is more effortless than ever. Make and receive calls, texts all on your wrist without waking your phone. Also the EzyPair technology ensures smooth pairing with your device or your TWS.",about4:"1.36” Ultra HD Display: Explore a bright, rich 1.39” HD, always on display that brings every detail to life.",about5:"500 Nits Peak Brightness: Comfortable viewing experience under any lighting conditions."}
        
      },
      {
        id: 9,
        name: "Dell G15 5520",
        img: "/laptop1.jpg",
        img1: "/de1.jpg",
        img2: "/de2.jpg",
        img3: "/de3.jpg",
        amt: 71899,
        seller: "Dell",
        category: "Labtop",
        des: "Processor: Intel Core i5-1235U (up to 4.40 GHz, 12MB Cache, 10 Cores) // RAM: 16 GB, 2 x 8 GB, DDR4, 2666 MHz // Storage: 512GB SSD",
        about:{about1:"Processor: Intel Core i5-1135G7 11th Generation Processor(up to 4.20 GHz) 8MB Cache, 4 Cores",about2:"RAM & Storage: 8 GB, 1 x 8 GB, DDR4, 2666 MHz, (2 DIMM Slots, Expandable up to 16GB) & 1TB HDD + 256GB SSD",about3:"Software: Win 11 Home + Office H&S 2021, 15 Months McAfee antivirus subscription, Dell Mobile Connect, My Dell, Dell Power Manager, McAfee, Support Assist, Dell ComfortView",about4:"Graphics & Keyboard: Integrated Onboard Graphics & Standard Keyboard // Display: 15.6",about5:"Ports: 2x USB 3.2 Gen1 ,1x USB 2.0, HDMI 1.4, SD Card reader, Audio jack, One Flip-down RJ 45 10/100/1000 Mbps, 1 M.2 2230/2280 slot for solid-state drive/Intel Optane"}

      },
      {
        id: 10,
        name: "HP Chromebook",
        img: "/laptop3.jpeg",
        img1: "/hp1.webp",
        img2: "/hp2.jpg",
        img3: "/hp3.webp",
        amt: 64499,
        seller: "Hp",
        category: "Labtop",
        des: "Processor: 12th Generation Intel Core i7-12650H Up To 4.70GHz Operating System: Pre-loaded Windows 11 Home with lifetime validity |Preinstalled Software: MSI Center | In the box: Laptop, Power Adapter",
        about:{about1:"Processor: Intel Core i5-1135G7 11th Generation Processor(up to 4.20 GHz) 8MB Cache, 4 Cores",about2:"RAM & Storage: 8 GB, 1 x 8 GB, DDR4, 2666 MHz, (2 DIMM Slots, Expandable up to 16GB) & 1TB HDD + 256GB SSD",about3:"Software: Win 11 Home + Office H&S 2021, 15 Months McAfee antivirus subscription, Dell Mobile Connect, My Dell, Dell Power Manager, McAfee, Support Assist, Dell ComfortView",about4:"Graphics & Keyboard: Integrated Onboard Graphics & Standard Keyboard // Display: 15.6",about5:"Ports: 2x USB 3.2 Gen1 ,1x USB 2.0, HDMI 1.4, SD Card reader, Audio jack, One Flip-down RJ 45 10/100/1000 Mbps, 1 M.2 2230/2280 slot for solid-state drive/Intel Optane"}

      },
      {
        id: 11,
        name: "Dell Inspiron",
        img: "/laptop4.jpg",
        img1: "/de1.jpg",
        img2: "/de2.jpg",
        img3: "/de3.jpg",
        amt: 72899,
        seller: "Dell",
        category: "Labtop",
        des: "Processor: Intel Core i5-1235U (up to 4.40 GHz, 12MB Cache, 10 Cores) // RAM: 16 GB, 2 x 8 GB, DDR4, 2666 MHz // Storage: 512GB SSD",
        about:{about1:"Processor: Intel Core i5-1135G7 11th Generation Processor(up to 4.20 GHz) 8MB Cache, 4 Cores",about2:"RAM & Storage: 8 GB, 1 x 8 GB, DDR4, 2666 MHz, (2 DIMM Slots, Expandable up to 16GB) & 1TB HDD + 256GB SSD",about3:"Software: Win 11 Home + Office H&S 2021, 15 Months McAfee antivirus subscription, Dell Mobile Connect, My Dell, Dell Power Manager, McAfee, Support Assist, Dell ComfortView",about4:"Graphics & Keyboard: Integrated Onboard Graphics & Standard Keyboard // Display: 15.6",about5:"Ports: 2x USB 3.2 Gen1 ,1x USB 2.0, HDMI 1.4, SD Card reader, Audio jack, One Flip-down RJ 45 10/100/1000 Mbps, 1 M.2 2230/2280 slot for solid-state drive/Intel Optane"}

      },
      {
        id: 12,
        name: "Chuwai HeroBook",
        img: "/laptop5.png",
        img1: "/ch1.jpg",
        img2: "/ch2.jpg",
        img3: "/ch3.webp",
        amt: 48999,
        seller: "Chuwai",
        category: "Labtop",
        des: "Processor: 12th Generation Intel Core i7-12650H Up To 4.70GHz Operating System: Pre-loaded Windows 11 Home with lifetime validity |Preinstalled Software: MSI Center | In the box: Laptop, Power Adapter",
        about:{about1:"Processor: Intel Core i5-1135G7 11th Generation Processor(up to 4.20 GHz) 8MB Cache, 4 Cores",about2:"RAM & Storage: 8 GB, 1 x 8 GB, DDR4, 2666 MHz, (2 DIMM Slots, Expandable up to 16GB) & 1TB HDD + 256GB SSD",about3:"Software: Win 11 Home + Office H&S 2021, 15 Months McAfee antivirus subscription, Dell Mobile Connect, My Dell, Dell Power Manager, McAfee, Support Assist, Dell ComfortView",about4:"Graphics & Keyboard: Integrated Onboard Graphics & Standard Keyboard // Display: 15.6",about5:"Ports: 2x USB 3.2 Gen1 ,1x USB 2.0, HDMI 1.4, SD Card reader, Audio jack, One Flip-down RJ 45 10/100/1000 Mbps, 1 M.2 2230/2280 slot for solid-state drive/Intel Optane"}

      },
      {
        id: 13,
        name: "Techno Megabook T1",
        img: "/laptop6.webp",
        img1: "/te1.webp",
        img2: "/te2.jpg",
        img3: "/te3.jpg",
        amt: 56799,
        seller: "Techno",
        category: "Labtop",
        des: "Processor: Intel Core i5-1235U (up to 4.40 GHz, 12MB Cache, 10 Cores) // RAM: 16 GB, 2 x 8 GB, DDR4, 2666 MHz // Storage: 512GB SSD",
        about:{about1:"Processor: Intel Core i5-1135G7 11th Generation Processor(up to 4.20 GHz) 8MB Cache, 4 Cores",about2:"RAM & Storage: 8 GB, 1 x 8 GB, DDR4, 2666 MHz, (2 DIMM Slots, Expandable up to 16GB) & 1TB HDD + 256GB SSD",about3:"Software: Win 11 Home + Office H&S 2021, 15 Months McAfee antivirus subscription, Dell Mobile Connect, My Dell, Dell Power Manager, McAfee, Support Assist, Dell ComfortView",about4:"Graphics & Keyboard: Integrated Onboard Graphics & Standard Keyboard // Display: 15.6",about5:"Ports: 2x USB 3.2 Gen1 ,1x USB 2.0, HDMI 1.4, SD Card reader, Audio jack, One Flip-down RJ 45 10/100/1000 Mbps, 1 M.2 2230/2280 slot for solid-state drive/Intel Optane"}

      },
      {
        id: 14,
        name: "Lenovo Ideapad",
        img: "/laptop7.avif",
        img1: "/ch1.jpg",
        img2: "/ch2.jpg",
        img3: "/ch3.webp",
        amt: 35899,
        seller: "Lenovo",
        category: "Labtop",
        des: "Processor: 12th Generation Intel Core i7-12650H Up To 4.70GHz Operating System: Pre-loaded Windows 11 Home with lifetime validity |Preinstalled Software: MSI Center | In the box: Laptop, Power Adapter",
        about:{about1:"Processor: Intel Core i5-1135G7 11th Generation Processor(up to 4.20 GHz) 8MB Cache, 4 Cores",about2:"RAM & Storage: 8 GB, 1 x 8 GB, DDR4, 2666 MHz, (2 DIMM Slots, Expandable up to 16GB) & 1TB HDD + 256GB SSD",about3:"Software: Win 11 Home + Office H&S 2021, 15 Months McAfee antivirus subscription, Dell Mobile Connect, My Dell, Dell Power Manager, McAfee, Support Assist, Dell ComfortView",about4:"Graphics & Keyboard: Integrated Onboard Graphics & Standard Keyboard // Display: 15.6",about5:"Ports: 2x USB 3.2 Gen1 ,1x USB 2.0, HDMI 1.4, SD Card reader, Audio jack, One Flip-down RJ 45 10/100/1000 Mbps, 1 M.2 2230/2280 slot for solid-state drive/Intel Optane"}

      },
      {
        id: 15,
        name: "Acer Aspire Lite",
        img: "/laptop2.jpg",
        img1: "/hp1.webp",
        img2: "/hp2.jpg",
        img3: "/hp3.webp",
        amt: 54499,
        seller: "Acer",
        category: "Labtop",
        des: "Processor: Intel Core i5-1235U (up to 4.40 GHz, 12MB Cache, 10 Cores) // RAM: 16 GB, 2 x 8 GB, DDR4, 2666 MHz // Storage: 512GB SSD",
        about:{about1:"Processor: Intel Core i5-1135G7 11th Generation Processor(up to 4.20 GHz) 8MB Cache, 4 Cores",about2:"RAM & Storage: 8 GB, 1 x 8 GB, DDR4, 2666 MHz, (2 DIMM Slots, Expandable up to 16GB) & 1TB HDD + 256GB SSD",about3:"Software: Win 11 Home + Office H&S 2021, 15 Months McAfee antivirus subscription, Dell Mobile Connect, My Dell, Dell Power Manager, McAfee, Support Assist, Dell ComfortView",about4:"Graphics & Keyboard: Integrated Onboard Graphics & Standard Keyboard // Display: 15.6",about5:"Ports: 2x USB 3.2 Gen1 ,1x USB 2.0, HDMI 1.4, SD Card reader, Audio jack, One Flip-down RJ 45 10/100/1000 Mbps, 1 M.2 2230/2280 slot for solid-state drive/Intel Optane"}

      },
      {
        id: 16,
        name: "Apple iPhone 13",
        img: "/mobile1.jpg",
        img1: "/ap1.jpg",
        img2: "/ap2.jpg",
        img3: "/ap3.jpg",
        amt: 54900,
        seller: "APPLE",
        category: "Mobile",
        des: "NEXT-GENERATION PORTRAITS — Capture portraits with dramatically more detail and color. Just tap to shift the focus between subjects — even after you take the shot.",
        about: {
          about1:
            "Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual",
          about2:
            "Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection",
          about3:
            "Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera",
          about4: "5000mAh(typ) battery with 22.5W charger in-box",
          about5:
            "MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating",
        },
      },
      {
        id: 17,
        name: "Apple iPhone 14",
        img: "/mobile2.jpg",
        img1: "/ap4.webp",
        img2: "/ap5.webp",
        img3: "/ap3.jpg",
        amt: 72999,
        seller: "APPLE",
        category: "Mobile",
        des: "NEXT-GENERATION PORTRAITS — Capture portraits with dramatically more detail and color. Just tap to shift the focus between subjects — even after you take the shot.",
        about: {
          about1:
            "Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual",
          about2:
            "Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection",
          about3:
            "Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera",
          about4: "5000mAh(typ) battery with 22.5W charger in-box",
          about5:
            "MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating",
        },
      },
      {
        id: 18,
        name: "Apple iPhone 15",
        img: "/mobile3.jpg",
        img1: "/ap6.jpg",
        img3: "/ap3.jpg",
        img2: "/ap7.jpg",
        amt: 99999,
        seller: "APPLE",
        category: "Mobile",
        des: "NEXT-GENERATION PORTRAITS — Capture portraits with dramatically more detail and color. Just tap to shift the focus between subjects — even after you take the shot.",
        about: {
          about1:
            "Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual",
          about2:
            "Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection",
          about3:
            "Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera",
          about4: "5000mAh(typ) battery with 22.5W charger in-box",
          about5:
            "MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating",
        },
      },
      {
        id: 19,
        name: "Apple iPhone 15 Pro Max",
        img: "/mobile4.jpg",
        img1: "/ap1.jpg",
        img2: "/ap2.jpg",
        img3: "/ap3.jpg",
        amt: 142899,
        seller: "APPLE",
        category: "Mobile",
        des: "NEXT-GENERATION PORTRAITS — Capture portraits with dramatically more detail and color. Just tap to shift the focus between subjects — even after you take the shot.",
        about: {
          about1:
            "Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual",
          about2:
            "Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection",
          about3:
            "Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera",
          about4: "5000mAh(typ) battery with 22.5W charger in-box",
          about5:
            "MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating",
        },
      },
      {
        id: 20,
        name: "Apple iPhone 14 Plus",
        img: "/mobile5.jpg",
        img1: "/ap4.webp",
        img2: "/ap5.webp",
        img3: "/ap3.jpg",
        amt: 88799,
        seller: "APPLE",
        category: "Mobile",
        des: "NEXT-GENERATION PORTRAITS — Capture portraits with dramatically more detail and color. Just tap to shift the focus between subjects — even after you take the shot.",
        about: {
          about1:
            "Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual",
          about2:
            "Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection",
          about3:
            "Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera",
          about4: "5000mAh(typ) battery with 22.5W charger in-box",
          about5:
            "MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating",
        },
      },
      {
        id: 21,
        name: "Apple iPhone 12 Plus",
        img: "/mobile6.jpg",
        img1: "/ap6.jpg",
        img3: "/ap3.jpg",
        img2: "/ap7.jpg",
        amt: 76899,
        seller: "APPLE",
        category: "Mobile",
        des: "NEXT-GENERATION PORTRAITS — Capture portraits with dramatically more detail and color. Just tap to shift the focus between subjects — even after you take the shot.",
        about: {
          about1:
            "Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual",
          about2:
            "Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection",
          about3:
            "Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera",
          about4: "5000mAh(typ) battery with 22.5W charger in-box",
          about5:
            "MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating",
        },
      },
      {
        id: 22,
        name: "OPPO Reno 7",
        img: "/mobile7.webp",
        img1: "/op1.jpg",
        img3: "/op2.jpg",
        img2: "/op3.jpg",
        amt: 22000,
        seller: "OPPO",
        category: "Mobile",
        des: "Powerful Performance: Up to 12GB RAM with Memory Fusion & 128GB Storage",
        about: {
          about1:
            "Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual",
          about2:
            "Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection",
          about3:
            "Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera",
          about4: "5000mAh(typ) battery with 22.5W charger in-box",
          about5:
            "MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating",
        },
      },
      {
        id: 23,
        name: "OPPO A15 Pro",
        img: "/mobile8.avif",
        img1: "/op4.jpg",
        img3: "/op5.jpg",
        img2: "/op6.webp",
        amt: 13000,
        seller: "OPPO",
        category: "Mobile",
        des: "Powerful Performance: Up to 12GB RAM with Memory Fusion & 128GB Storage",
        about: {
          about1:
            "Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual",
          about2:
            "Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection",
          about3:
            "Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera",
          about4: "5000mAh(typ) battery with 22.5W charger in-box",
          about5:
            "MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating",
        },
      },
      {
        id: 24,
        name: "OnePlue Nord CE13",
        img: "/mobile9.jpg",
        img1: "/on1.jpg",
        img3: "/on2.png",
        img2: "/on3.jpg",
        amt: 19899,
        seller: "OnePlus",
        category: "Mobile",
        des: "Storage: 8 GB + 128 GB | 12 GB + 256 GB; LPDDR4X RAM, UFS 3.1",
        about: {
          about1:
            "Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual",
          about2:
            "Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection",
          about3:
            "Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera",
          about4: "5000mAh(typ) battery with 22.5W charger in-box",
          about5:
            "MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating",
        },
      },
      {
        id: 25,
        name: "Realme Narzo N53",
        img: "/mobile10.webp",
        img1: "/r1.webp",
        img3: "/r2.png",
        img2: "/r3.jpg",
        amt: 11999,
        seller: "Realme",
        category: "Mobile",
        des: "Enjoy smooth multitasking and effortless app switching with the powerful 8GB dynamic RAM. Store all your favorite apps, photos, and files with the generous 128 GB ROM",
        about: {
          about1:
            "Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual",
          about2:
            "Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection",
          about3:
            "Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera",
          about4: "5000mAh(typ) battery with 22.5W charger in-box",
          about5:
            "MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating",
        },
      },
      {
        id: 26,
        name: "Realme 11 5G",
        img: "/mobile11.jpg",
        img1: "/r4.jpg",
        img3: "/r5.png",
        img2: "/r6.jpg",
        amt: 19725,
        seller: "Realme",
        category: "Mobile",
        des: "Enjoy smooth multitasking and effortless app switching with the powerful 8GB dynamic RAM. Store all your favorite apps, photos, and files with the generous 128 GB ROM",
        about: {
          about1:
            "Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual",
          about2:
            "Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection",
          about3:
            "Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera",
          about4: "5000mAh(typ) battery with 22.5W charger in-box",
          about5:
            "MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating",
        },
      },
      {
        id: 27,
        name: "Realme C51",
        img: "/mobile12.webp",
        img1: "/r1.webp",
        img3: "/r2.png",
        img2: "/r3.jpg",
        amt: 9899,
        seller: "Realme",
        category: "Mobile",
        des: "Enjoy smooth multitasking and effortless app switching with the powerful 8GB dynamic RAM. Store all your favorite apps, photos, and files with the generous 128 GB ROM",
        about: {
          about1:
            "Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual",
          about2:
            "Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection",
          about3:
            "Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera",
          about4: "5000mAh(typ) battery with 22.5W charger in-box",
          about5:
            "MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating",
        },
      },
      {
        id: 28,
        name: "OnePlus 10R",
        img: "/mobile13.webp",
        img1: "/on1.jpg",
        img3: "/on2.png",
        img2: "/on3.jpg",
        amt: 32899,
        seller: "OnePlus",
        category: "Mobile",
        des: "Storage: 8 GB + 128 GB | 12 GB + 256 GB; LPDDR4X RAM, UFS 3.1",
        about: {
          about1:
            "Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual",
          about2:
            "Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection",
          about3:
            "Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera",
          about4: "5000mAh(typ) battery with 22.5W charger in-box",
          about5:
            "MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating",
        },
      },
      {
        id: 29,
        name: "OnePlus 10T",
        img: "/mobile14.webp",
        img1: "/on1.jpg",
        img3: "/on2.png",
        img2: "/on3.jpg",
        amt: 54899,
        seller: "OnePlus",
        category: "Mobile",
        des: "Storage: 8 GB + 128 GB | 12 GB + 256 GB; LPDDR4X RAM, UFS 3.1",
        about: {
          about1:
            "Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual",
          about2:
            "Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection",
          about3:
            "Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera",
          about4: "5000mAh(typ) battery with 22.5W charger in-box",
          about5:
            "MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating",
        },
      },
      {
        id: 30,
        name: "Samsung Galaxy S23 FE 5G",
        img: "/mobile15.jpg",
        img1: "/sm1.jpg",
        img3: "/sm2.jpeg",
        img2: "/sm3.jpg",
        amt: 64799,
        seller: "Samsung",
        category: "Mobile",
        des: "Enjoy smooth multitasking and effortless app switching with the powerful 8GB dynamic RAM. Store all your favorite apps, photos, and files with the generous 128 GB ROM",
        about: {
          about1:
            "Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm architecture | 12GB of RAM including 6GB Virtual",
          about2:
            "Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with Corning Gorilla Glass 3 Protection",
          about3:
            "Camera: 50MP f/1.8 AI Dual camera with classic film filters, Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse, Google lens | 8MP Selfie camera",
          about4: "5000mAh(typ) battery with 22.5W charger in-box",
          about5:
            "MIUI Dialer | MIUI 14 with Android 13 | Side fingerprint | IR blaster | 3.5mm Audio jack | IP53 rating",
        },
      }],
    emptyarray:[],
    rangeminimum:"",
    rangemaximum:"",
    categoryList: []
  },
  reducers:{
    statechange(store, action){
      let categorydata=store.cartarray.map(function (getdata) {
        return getdata.category
      })
      console.log(categorydata);
      let newarray=["All",...categorydata.filter((check,index)=>{
        return categorydata.indexOf(check)===index
      })]
      console.log(newarray);
      store.emptyarray=newarray
      const selectFilteredItems = (state, category) => {
        return state.cartarray.filter(item => item.category === category);
      };
      console.log(selectFilteredItems);
    },
    rangefilter(store,action){
      let amount=store.cartarray.map(function(getdata){
        return getdata.amt
      })
      console.log(amount);
      let min=Math.min(...amount)
      console.log(min);
      let max=Math.max(...amount)
      console.log(max);
      store.rangemaximum=max;
      store.rangeminimum=min;
    },
    searchItem(store, action) {
      let searchProducts=store.cartarray.map(function (getdata) {
        return getdata.category
      })
      console.log(searchProducts);
      let newpro=[...searchProducts.filter((check,index)=>{
        return searchProducts.indexOf(check)===index
      })]
      console.log(newpro)
      store.categoryList=newpro
      const searchFilterPro = (state, category) => {
        return state.cartarray.filter(item => item.category === category);
      };
      console.log(searchFilterPro)
    } 
  
  // }
  

  
  
  }
  
})
export const datareduce=create.actions
const store=configureStore(create)
export default store