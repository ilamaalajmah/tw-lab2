const Benefits = () => {
  return (
    <div className="py-10 px-5 bg-white-100">
      <h2 className="text-3xl font-bold text-center mb-5">Here are some of the benefits of your offer</h2>
      <p className="text-center mb-10">
      Explain what makes your product or service great. Talk about features in a way that highlights the real value people get out of them.

</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <div className="rounded-lg p-4 flex flex-col items-center h-56">
          <img
            src="https://img.notionusercontent.com/s3/prod-files-secure%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F33e082c2-a488-4061-9056-230b793e45d2%2FUntitled.png/size/w=120?exp=1727433092&sig=vocT85moAGL3De9hoMJMJgAmODhgaoT4Vb_SkFVAeCw"
            alt="Benefit 1"
            className="w-24 h-24 object-contain mb-3" 
          />
          <h3 className="text-xl font-semibold text-center">Benefit 1</h3>
          <p className="text-center">For example, restaurants and bakeries could outline the health benefits of their all-natural ingredients.

</p>
        </div>
        

        <div className= "rounded-lg  p-4 flex flex-col items-center h-56">
          <img
            src="https://img.notionusercontent.com/s3/prod-files-secure%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F1146d831-7a41-4d41-9684-afbb9a282e5c%2FUntitled.png/size/w=210?exp=1727433093&sig=RASt2THSxUK9t_jMVu9q9-ZOfPGGhxHv_-HGtbX8DKA"
            alt="Benefit 2"
            className="w-24 h-24 object-contain mb-3" 
          />
          <h3 className="text-xl font-semibold text-center">Benefit 2</h3>
          <p className="text-center">Florists and other small retailers might use this space to describe how their products make delightful, one-of-a-kind gifts.

</p>
        </div>
        

        <div className="rounded-lg p-4 flex flex-col items-center h-56">
          <img
            src="https://img.notionusercontent.com/s3/prod-files-secure%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2Fe1e4f38a-a958-4b5d-bcb0-eddce8b433c0%2FUntitled.png/size/w=120?exp=1727433090&sig=3w3pBflBvZqKnr70FRHqHINyCW-hCO1yHf5noGDg-JU"
            alt="Benefit 3"
            className="w-24 h-24 object-contain mb-3" 
          />
          <h3 className="text-xl font-semibold text-center">Benefit 3</h3>
          <p className="text-center"> You could also add buttons to this section and share links to other products or available delivery methods.

</p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;