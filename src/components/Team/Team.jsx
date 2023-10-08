const style = `
section {
  display: grid;
  place-content: center;
}
.container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1em;
  transition: all 400ms;
}
.container:hover .box {
  filter: grayscale(100%) opacity(24%);
}
.box {
  position: relative;
  background-size: cover;
  transition: all 400ms;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .box:hover {
  filter: grayscale(0%) opacity(100%);
}
.container:has(.box-1:hover) {
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
}
.container:has(.box-2:hover) {
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
}
.container:has(.box-3:hover) {
  grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
}
.container:has(.box-4:hover) {
  grid-template-columns: 1fr 1fr 1fr 3fr 1fr;
}
.container:has(.box-5:hover) {
  grid-template-columns: 1fr 1fr 1fr 1fr 3fr;
}
.box:nth-child(odd) {
  transform: translateY(-16px);
}
.box:nth-child(even) {
  transform: translateY(16px);
}
.box::after {
  content: attr(data-text);
  position: absolute;
  bottom: 20px;
  background: #000;
  color: #fff;
  padding: 10px 10px 10px 14px;
  letter-spacing: 4px;
  text-transform: uppercase;
  transform: translateY(60px);
  opacity: 0;
  transition: all 400ms;
}
.box:hover::after {
  transform: translateY(0);
  opacity: 1;
  transition-delay: 400ms;
}
`;

const Team = () => {
  return (
    <>
      <style>{style}</style>
      <section className="my-10">
        <h1 className="text-center font-extrabold text-5xl my-8 text-blue-500">
          Discover Our Amazing Team
        </h1>
        <p className="text-center font-medium mb-8 dark:text-[#e4fdffa7] text-gray-600">
          Uncover the incredible people behind the magic!
        </p>

        <div className="container mx-auto lg:w-[800px] md:w-[600px] sm:w-[400px] w-[260px] lg:h-[500px] md:h-[500px] h-[300px]">
          <div
            className="box box-1"
            style={{
              backgroundPosition: "center center",
              backgroundImage:
                "url( https://i.ibb.co/DMhsPpc/steptodown-cgom263693.jpg)",
            }}
            data-text="Renji"></div>
          <div
            className="box box-2"
            style={{
              backgroundPosition: "center center",
              backgroundImage:
                "url(https://i.ibb.co/Rhhc2D1/alex-mccarthy-RGKd-WJOUFH0-unsplash.jpg)",
            }}
            data-text="Sora"></div>
          <div
            className="box box-3"
            style={{
              backgroundPosition: "center center",
              backgroundImage:
                "url(https://i.ibb.co/JH1fSvW/andrei-damian-fcc-Onwu-WIMM-unsplash.jpg)",
            }}
            data-text="Kaito"></div>
          <div
            className="box box-4"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/D9v783B/qu-nh-le-m-nh-dp3-CS405-UZM-unsplash.jpg)",
              backgroundPosition: "center center",
            }}
            data-text="Tsuki"></div>
          <div
            className="box box-5"
            style={{
              backgroundPosition: "center center",
              backgroundImage:
                "url(https://i.ibb.co/kGZD7p0/stephanie-nakagawa-ADSKIn0-Sc-Dg-unsplash.jpg )",
            }}
            data-text="Mitsui"></div>
        </div>
      </section>
    </>
  );
};

export default Team;
