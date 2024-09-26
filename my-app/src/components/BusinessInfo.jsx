const BusinessInfo = () => {
    return (
      <section className="bg-white py-10 px-5 flex flex-col md:flex-row justify-center items-center"> 
        <img 
          src="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F2f5489f8-f25a-4888-ad7f-e40ea4a7281d%2FUntitled.png?table=block&id=fff185a2-dff1-81a1-ba66-dde092088d99&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=860&userId=&cache=v2"
          alt="Business Info"
          className="w-full md:w-1/4 object-cover mb-5 md:mb-0 md:mr-5" 
        />
  
        <div className="md:w-3/4 text-center md:text-left"> 
          <div className="mb-5">
            <h1 className="text-3xl font-light"> 
              some more<br />
              information about<br />
              your business
            </h1>
          </div>
          <div className="mt-2"> 
            <p>
            Share a little about yourself as a business owner, or maybe 
            describe what makes your product or service unique. Give visitors one more reason to care about your offer and want to buy from you.            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default BusinessInfo;