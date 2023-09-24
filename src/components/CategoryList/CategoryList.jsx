

const CategoryList = () => {
    return (
        <div>
            <h1 className="text-6xl text-center mt-6">Job Category List</h1>
            <p className="text-center mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto px-6">
                <div className="border border-black border-solid bg-slate-300 rounded h-52 w-64 text-white ">
                    <img src="../../../icons/accounts.png" alt="" />
                    <h1 className="text-center text-2xl">Account & Finance</h1>
                    <p className="text-center">300 Jobs Available</p>
                </div>
                <div className="border border-black border-solid bg-slate-300 rounded h-52 w-64 text-white ">
                    <img src="../../../icons/creative.png" alt="" />
                    <div className="flex flex-col items-center justify-center mt-6">
                        <h1 className="text-center text-2xl">Creative Design</h1>
                        <p className="text-center">100+ Jobs Available</p>
                    </div>
                </div>
                <div className="border border-black border-solid bg-slate-300 rounded h-52 w-64 text-white ">
                    <img src="../../../icons/marketing.png" alt="" />
                    <div className="flex flex-col items-center justify-center mt-6">
                        <h1 className="text-center text-2xl">Marketing & Sales</h1>
                        <p className="text-center">150 Jobs Available</p>
                    </div>

                </div>
                <div className="border border-black border-solid bg-slate-300 rounded h-52 w-64 text-white">
                    <img src="../../../icons/chip.png" alt="" />
                    <div className="flex flex-col items-center justify-center mt-6">
                        <h1 className="text-center text-2xl">Engineering Job</h1>
                        <p className="text-center">224 Jobs Available</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CategoryList;