const CallToActionSection = () => {
    return (
      <section 
        className="bg-cover bg-center py-20 flex flex-col items-center justify-center" 
        style={{ backgroundImage: 'url(https://img.notionusercontent.com/s3/prod-files-secure%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F1bf45807-806c-4ab9-a756-d7ff6c3f56f6%2FScreen_Shot_2023-11-26_at_11.03.28_AM_cleanup.png/size/w=1420?exp=1727433094&sig=pH2q9NiEWCsz4tFsz-v_2shL86mhzrtWOQpGtXkwDgw)' }}
      >
        <h2 className="text-4xl font-light text-black mb-4">End with one final call to action</h2>
        <p className="text-lg text-black text-center max-w-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button 
          className="bg-[#fead02] text-black font-bold py-2 px-4 rounded-lg border-none transition duration-300 hover:bg-[#d8a800]"
        >
          ORDER NOW
        </button>
      </section>
    );
  };
  
  export default CallToActionSection;