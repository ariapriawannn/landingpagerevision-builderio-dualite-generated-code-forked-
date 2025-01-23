const images = {
  image1: `https://s3-alpha-sig.figma.com/img/56c6/acd0/d2ea720e33bddc825987d8ca8ac5175f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aZp~frenKgihwL4DFE3CoJuN9E5edvEQX5gc2Gfz0HUFCh8NLwI4ED9CrXkDcfTTtbF2qPrhe2MkM7osBuSTT1muq4mfOuZLE~EJNY6qH9ExmN7c72CWES5EzBw-ZFdVhoeM~bWBArwTZ2yiSaYIZELYmGABJh4fl5CJHOybj6n23CMd~CEisPOLPlY2yvuUtgcN1xeQE5f39PAnv9haRJl52eU1ReUe0He8nw4SdLsv1729IObbCOPK9b4lxl0b6s~bPEzotRcQ-bNLYo2EXcgZgYvynlanvATLAPFgLMM62Qcv2UZhn~HBLoXmDRxTbvwSQcGfF4NZEx~1NeRBWg__`,
  image2: `https://s3-alpha-sig.figma.com/img/2c3b/bc4d/ddec60577c26e1e99b0c1746bb150de0?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LZd3OckRi8lc1AaFlCLaM6SY3MJZTRcm7e3U4ggX1bINgZp~COzYjbr0CCvlB-nUTYbbasYc-Nv-LW7U96kQFjlWVnDH3eevFaOt-~~bH4l3acWzUocPwgdRgs-T-p--SR8SreCnffWvMU4YSTF5-HfMBcMFsq~~Dy7RCKXzjbgZ1zHN9tJwiFlf~y-wyDrD2ggVMhbpsc-pHc07D0Nrr1XNoLxp2lz~ikIYz7zjW1Te-MrjJrvZl6d5xK8uQBKO7PahsR0W4QvweIkWOc-jVwq1pkUwvayAPG4E8S0ExyDnCScz34WRgEcrdtwV3llZEaRKnSAs0DRAujQU4-xgOg__`,
  image3: `https://s3-alpha-sig.figma.com/img/25c8/f001/62fe42fd8870e3cde65073b70fbf42ce?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SEfF00xQLLtTJMH0JTvXDSB1ZPTqnjq5LFUzN9AnbK2YHNOoVB8tsZI0w2tP3SzUdSQjkp4RNBvVmRo73LmXoIg0xPbxPH2d7jSfGv~Apt9XG8PRZx9unJRyAYirmqL5kKWTai3iHjJ-icnccL26FVfbOe6aE8laMqj1C03W1oeXnZyikdeOMjXE8Bf5LeqMfkJxFBd0SdpkrOIQCnKkW-CmAn4vW01gwJ8Q3qHwfpIwWUIaht99nnBQuuDeE-Vkd08G9rjDwJjER15yTfn67O6qcBvbXuYD-ODcNIVz88QLWEkk41aah67Az9t7H3zFCLkkc2kn7Xe6P5a7ScSlTA__`,
  image4: `https://s3-alpha-sig.figma.com/img/eec5/a938/117ff339cd1f41d2cc6b57cd1d70397f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eKTTI1ywKgzuzI9cGZuQhioRcAFILuO~XnQHxbDO44TkrjBDBwJx9xc1XAfKkIy2jOKZXX4~CL1z6KrEn6~CQyckQgwzlzmovgibGpdoRDb2YAsJzvM236gVTEdv8ByYiUYSCyVEKcIn5PooIQlOwNo3zJpaaU1mTnYrixik6vuCZ0biRgu5Z87K2FP1WjxffbysCoLnKJCuB4RrgQXtXuEP5X36RY4aq729Bbe4E0HXdQU7UT2VSB4Ptewxe3Jy2WC0-VfIJTvM-dQLtCM9xS1MYZ3W9bSKW5ysFlNmj7S5kiilVAjvJMuUKKJ39h5fJVQZBrCBowp~H3G-Yy4hpg__`,
  image5: `https://s3-alpha-sig.figma.com/img/fb19/f6df/b778ff5ae77ec625b7181fb0794b790d?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yr-Sm1GoPys5-RIq0RMlu6v5stcwQHkj9Vss3vimAgoEuF8n3NwaSQs4IiFJPkm~JG4NOyF7SRIOGRZkONj82dazoY69e5~UMDjTUaDlaffuiYlQRCgBIfvyXUKzY2Xd~oUv-VumZ0GOMF36F5T5-WC7toFE-b-kueY9cH9ndIaMSG4fVgSVev4LEHZA0vrqkpWWf0phlPVw1WtNb3HIbQVw0lA2XWhTw41Cl3naLwl8QyiWTThdJDaHBgbrh8DeKEtC0RDeIZ0WHSYG1yVKfkUg1bbvJaPkHB7YuR6m0FCvexU-M7WMdzurPIzxLEOlM6YaoBj8Cim2yi0BOEXuAA__`,
  image6: `https://s3-alpha-sig.figma.com/img/c82d/1058/90ddd015920b512024814338beeefeb8?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ny9L-4ogt27FjchOBsQg~jH9CTY3tcSL4AxKxcs1klijh92BFmw0772jdvXZ5FEunHNeUyMfDbMsoKf1Pd2f9shuVzW-rii2CHTRuUajGZqfDFzzQNvXCQFasNM0evRkEZ~ha0Mf6ThMoIa0gqjd8HKbJiSbD5dpy~GbeZLKgqEUnSG7BtCTGlCmEbkezOGLvH4m7mXINeaAScsn57qg552L4bc-jbEHP5Z2jgAmc2dD4ZKfBQIRc7vMXnCkOQAMHeqUA~NnFQxRrVF-bnYNXi3b9GQM91aecYDv-uDGL1qglk1d0y3bw44Lms~EhIAGiPGwY~nBlGe-wIA3T4Cp5g__`,
  image7: `https://s3-alpha-sig.figma.com/img/9cf3/e7ec/9876ec699b5a458d18abb260bfdbf1d7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RbieoTGPoKN-qrZnKnAW7hp-AEURb16T~Ewrv5IcGPYxaE5sBKLyeMYYYgXoCu6FGKgZqyJRNJct8MQOpzFAaaD3NJItG6A5dk9ClkArSu93RgpiA7yWYYiIAc~YD4uUz-QyGFRkGfC2gCvYro4ibyjoCaFrQTdXnHqEOfcmpAV29vjdFbOJjDXQFF5pWQLR1jpdfjBGn2Q1VnW2szoTA8ZTRT3cp2Em4YBKgIZMxjrx65tvKARaaWNlQImfjaRmBsgNPUeMryfNFShwQ2dQwEGlEACSJQ6enf7ahLmo5TgDXAKNbwWbEGY~ox0Sj1-v9JDqLDN1ARS15c4cxlKxGQ__`,
  image8: `https://s3-alpha-sig.figma.com/img/37e8/11bc/59ea662a3207c8fb741a8222289d63c3?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kx4PcIP-aNpN2ME6cFP71CurUccMypm~aMULvbdM5QfgpxlvEzAPlDSbZVOG~Q4uQf2ZWTu9Ph0GYzwehbp8SVgmVJsYzB2f5l7SpMNvAGp9ojSxBuE39DMV0useBcsKKgiVJFI5zrzPC6XVfRXm5hcACUv4zQkaeQIWq0ACvnlQbYcIjzgh6XHPVvutvIi~EnctXh5yS1sYwGYSNCpIA0-SUAUevrAsbhJYD-wxXlImYDAqLuBq5avxBoWfNgyNgGURi1QxT9Fic7Qv5oqrzNoM8~JcLtJ5cSEomizpTjJi1TzUOibY8rlsSnYN2w~-8U2d858dwiUcviQ9Ywbysw__`,
  image9: `https://s3-alpha-sig.figma.com/img/9a4b/e58b/f7c66fad09ccf9856ff979cf2641c8b9?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L1fHaVWiMBjYY~jnskh5HUh35PSEoHS3ve6iyUf4bx5Jofuks0xaOR7eNsFjkJn~-WFy9avspQ6RR~r3Zj-M4rfTiuj2Xh1ySMrzRKibL5dgwDOqjHnO~N8nOOy8-sNGPCujR-hho2ZRHlZUXbdRw5CVYuZ0YQn5nrSqJCvhC2Z1e2umFXuKdL8hZigNQstmVWHAprUvNat0ORElQDsCeHDDVwE~fFfTUpBKfO9s-3tAgujFT4edKpW6IByDNIHe0FWMIwmidkQwh~z8duEMTl4D98FvVFErU9bGaSK-VG89AguG4eHGbvjIZinr3U7ctEkvmC3JlXliH6ySpKGVIQ__`,
  image10: `https://s3-alpha-sig.figma.com/img/9a4b/e58b/f7c66fad09ccf9856ff979cf2641c8b9?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L1fHaVWiMBjYY~jnskh5HUh35PSEoHS3ve6iyUf4bx5Jofuks0xaOR7eNsFjkJn~-WFy9avspQ6RR~r3Zj-M4rfTiuj2Xh1ySMrzRKibL5dgwDOqjHnO~N8nOOy8-sNGPCujR-hho2ZRHlZUXbdRw5CVYuZ0YQn5nrSqJCvhC2Z1e2umFXuKdL8hZigNQstmVWHAprUvNat0ORElQDsCeHDDVwE~fFfTUpBKfO9s-3tAgujFT4edKpW6IByDNIHe0FWMIwmidkQwh~z8duEMTl4D98FvVFErU9bGaSK-VG89AguG4eHGbvjIZinr3U7ctEkvmC3JlXliH6ySpKGVIQ__`,
};
export default images;
