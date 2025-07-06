import React from 'react'

function Logincomp() {
    return (
        <div>
            {/* <!-- Banner --> */}
            <section id="banner" class="hidden xl1440:flex bg-[#0E52A1]">
                <div class="h-12 py-4 px-3 flex justify-center items-center">
                    <p class="text-white text-[13px] mb-1 tracking-[0.019em]">
                        Now you can log in using your email address instead of a username. Click the Log In with Email button.
                        <a class="underline" href="https://salesforce.vidyard.com/watch/nVj5vidvHYbwHHfMWPrEcU" target="_blank">
                            Learn more
                        </a>.
                    </p>
                </div>
            </section>

            {/* <!-- Login page --> */}
            <section id="login page">
                <div class="pt-5 xl:pt-[13px] bg-[#F4F5F7] flex flex-col justify-center items-center pb-6">
                    <a class="mb-6" href="/home">
                        <img src="https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-with-type-logo.svg" alt=""
                            class="w-[160px] h-[112px]" />
                    </a>
                    <div class="p-5 mb-6 rounded border-[0.8px] border-gray-200 bg-white w-full md:w-[380px]">
                        <div>
                            <form action="/Login" class="border-b-[1.8px] border-gray-50 ">
                                <div class="flex flex-col">
                                    <label for="username" class="text-[#54698D] text-sm md:text-xs">Username</label>
                                    <input type="email" class="p-3 mt-2 mb-4 md:py-2 bg-white border-[#969492] rounded border-[0.8px]" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="password" class="text-[#54698D] text-sm md:text-xs">Password</label>
                                    <input type="password"
                                        class="p-3 mt-2 mb-4 md:py-2 bg-white border-[#969492] rounded border-[0.8px]" />
                                </div>
                                <button class="btn-primary md:w-full md:text-xs">Log In</button>
                                <div class="py-4 flex">
                                    <div class=" pl-1 pr-2">
                                        <input type="checkbox" />
                                    </div>
                                    <label for="" class="text-[13px] text-brand-dark">Remember me</label>
                                </div>
                            </form>
                            <div class="pt-4 flex justify-between">
                                <a class="text-sm text-brand-light md:text-xs">Forgot Your Password?</a>
                                <a class="text-sm text-brand-light md:text-xs">Use Custom Domain</a>
                            </div>
                            <div class="flex items-center justify-center my-2">
                                <div class="w-full h-px bg-gray-400"></div>
                                <span class="px-2 text-sm text-gray-600">or</span>
                                <div class="w-full h-px bg-gray-400"></div>
                            </div>
                            <div>
                                <a class="btn-primary flex md:text-[13px] md:w-full md:px-6" href="https://welcome.salesforce.com?ref=lsc">
                                    <img alt="salesforce" src="https://login.salesforce.com/img/gidr/email.svg" width="18" height="18" class="mr-4" /><span class="align-middle">Log In with Email</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mx-4 text-[15px] bg-[#F4F5F7] md:text-xs md:mx-auto flex justify-center md:mb-2 text-brand-dark">© 2025 Salesforce, Inc. All rights reserved. |
                    <a href="https://www.salesforce.com/in/company/privacy" target="_blank" class="text-brand-light">Privacy</a>
                </div>
            </section>
        </div>
    )
}

export default Logincomp