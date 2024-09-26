const Landing = () => {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url('https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=fff185a2-dff1-81af-bc73-de1e521c36bc&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1260&userId=&cache=v2')`,
            }}>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative flex flex-col items-start justify-center h-full pl-10 text-white">
                <h3 className="text-4xl font-bold text-left">FreshGoods</h3>
                <h2 className="text-5xl my-2 text-left">Concisely <br/>describe your<br/> product or service</h2>
                <p className="max-w-lg mt-4 text-lg text-left">
                    No need to get clever. Tell people exactly what youre offering, then use this space to communicate your key value proposition. No additives.
                </p>
                <button
                    className="mt-6 bg-[#feb304] text-black py-2 px-6 rounded-lg transition duration-300 hover:bg-[#e0a300]"
                >
                    ORDER NOW
                </button>
            </div>
        </div>
    );
}

export default Landing;