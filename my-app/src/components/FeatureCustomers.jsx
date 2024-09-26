const FeatureCustomers = () => {
    const features = [
      {
        image: "https://img.notionusercontent.com/s3/prod-files-secure%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F5f62f496-1e54-4012-8d8f-2f1000fe5bc5%2FUntitled.png/size/w=910?exp=1727433093&sig=5Ak_fj7QKQL8IvVWIRzESmjO_R7IDQsAySY6efHqTeQ",
        title: "Feature 1",
        description: "Talk about some of the details of your offer with a focus on the value people get back."
      },
      {
        image: "https://img.notionusercontent.com/s3/prod-files-secure%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F63d3a2f3-3120-4ed7-b1aa-aa020cb5e16c%2FUntitled.png/size/w=910?exp=1727433090&sig=Jb_IG20D1Mj_leh50d1Rs-zqRz7DMNKe_TOYgxv4Qvk",
        title: "Feature 2",
        description: "Is there a pain point that your product service resolves? Tell visitors about it here."
      },
      {
        image: "https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F230c653c-0450-4fd1-8883-e96d6030db35%2FUntitled.png?table=block&id=fff185a2-dff1-81f0-8f6b-fb0cb12bb8b5&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=910&userId=&cache=v2",
        title: "Feature 3",
        description: "Alternatively, you could use this section to address some frequently asked questions."
      }
    ];
  
    return (
      <div className="bg-[#f5f5f5] py-10 px-5">
        <div className="flex flex-wrap justify-around">
          {features.map((feature, index) => (
            <div key={index} className="p-5 m-2 max-w-xs">
              <img src={feature.image} alt={`Feature ${index + 1}`} className="w-full h-40 object-cover rounded-t-lg" />
              <h3 className="text-xl font-bold text-center mt-3">{feature.title}</h3>
              <p className="text-center mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default FeatureCustomers;