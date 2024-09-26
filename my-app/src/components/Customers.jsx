const Customers = () => {
    return (
      <div 
        className="relative py-10 px-5" 
        style={{
          backgroundImage: 'url("https://img.notionusercontent.com/s3/prod-files-secure%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2Fb065d811-70a9-454e-947e-699ec2801a37%2FScreen_Shot_2023-11-26_at_11.01.17_AM_cleanup.png/size/w=1420?exp=1727433093&sig=UdjB98PW4zJ-ibKSmDCjG4TsT4I6uhTT4j-Z43dvACs")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="text-3xl font-bold text-center text-white mb-5">What Our Customers Say</h2>
        <div className="flex justify-center mb-5">
          <span 
            className="block w-20 h-1"
            style={{ backgroundColor: '#ffb404' }}
          />
        </div>
        <p className="text-center text-white mb-5">
        Share a real testimonial that hits some of your benefits (but isnt too sales-y).        </p>
        <div className="flex justify-center">
          <img
            src="https://img.notionusercontent.com/s3/prod-files-secure%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F587152f7-471a-4914-8660-580bfcfd35ca%2FUntitled.png/size/w=200?exp=1727433093&sig=c2lWoejLfBvLLx-UUZrwgZ1V7QGb7xejOV4mxEp7His"
            alt="Customer Image"
            className="w-24 h-24 object-contain mb-3" 
          />
        </div>
        <div className="flex justify-center mb-5">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/435/915/small_2x/rating-stars-web-signs-5-stars-yellow-isolated-on-transparent-background-vector.jpg"
            alt="Star Rating"
            className="w-24" 
          />
        </div>
      </div>
    );
  }
  
  export default Customers;