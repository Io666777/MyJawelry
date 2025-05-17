<template>
    <div class="flex justify-center items-center min-h-screen fond-[inter]">
        <div class="flex flex-col gap-5 bg-white p-6 rounded-lg shadow-lg place-self-center">
            <h1 class="font-semibold text-gray-800 text-center text-3xl ">Join our monthly newsletter</h1>

            <input 
                class="w-[300px] h-[50px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 place-self-center"
                placeholder=" ✉️ Email"
            />

            <button 
                class="w-[300px] h-[50px] bg-[#FF7171] hover:bg-[#E65F5F] text-white font-semibold rounded-lg transition duration-200 place-self-center"
            >
                Subscribe
            </button>

            <p class="text-gray-500 text-center place-self-center">👉 We never spam!</p>
        </div>
    </div>
</template>
