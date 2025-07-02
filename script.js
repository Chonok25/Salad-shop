// script.js

// ข้อมูลสูตรยำแบบจำลอง
const recipes = [
    {
      title: "ยำวุ้นเส้น",
      image: "https://www.m-culture.go.th/th/article/s/yum_wun_sen.jpg",
      spicy: "เผ็ดมาก",
      description: "ยำวุ้นเส้นรสจัดจ้าน พร้อมกุ้งสด หมูสับ และผักสด"
    },
    {
      title: "ยำปลาร้า",
      image: "https://img.wongnai.com/p/1920x0/2020/03/03/6a3cfb5c784e47a3aa63037cfb0e981b.jpg",
      spicy: "เผ็ดน้อย",
      description: "ปลาร้าสุดแซ่บ ผสมผักและหมูยอ พร้อมน้ำยำเข้มข้น"
    },
    {
      title: "ยำหมูยอไข่แดงเค็ม",
      image: "https://www.sgethai.com/wp-content/uploads/2021/09/yum-moo-yor-egg.jpg",
      spicy: "เผ็ดกลาง",
      description: "หมูยอเน้น ๆ ไข่แดงเค็มเยิ้ม ราดน้ำยำสูตรพิเศษ"
    }
  ];
  
  // สร้าง HTML จากข้อมูล
  const recipeList = document.getElementById("recipeList");
  
  recipes.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
  
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" />
      <h3>${recipe.title}</h3>
      <p class="spicy">🌶 ${recipe.spicy}</p>
      <p>${recipe.description}</p>
    `;
  
    recipeList.appendChild(card);
  });
  