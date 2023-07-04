import { Text } from "app/design/typography"
import { View } from "app/design/view"

const FooterComponent = () => {
  return (
    <View className="bg-black w-full">
      <div className="container mx-auto max-w-7xl  px-8">

        <div className="w-full flex flex-col md:flex-row py-6">

          <div className="flex-1 mb-6 ">
            <svg className="h-8 fill-current inline" viewBox="0 0 88 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" data-v-27a487fa=""><g clip-path="url(#a)" fill="#fff"><path d="M18.268 11.268c-1.2-1.127-3.07-1.955-5.72-2.531l-2.87-.61c-.765-.156-1.115-.333-1.275-.453a.497.497 0 0 1-.224-.434c0-.25.096-.42.322-.56.294-.185.788-.283 1.43-.283.64 0 1.157.118 1.441.34.285.225.504.663.652 1.304l.11.472 7.615-.704-.052-.56c-.213-2.31-1.17-4.123-2.846-5.385C15.21.627 12.95 0 10.137 0 7.142 0 4.771.67 3.09 1.992 1.362 3.348.488 5.269.488 7.699c0 1.964.636 3.56 1.892 4.742 1.214 1.145 3.116 1.981 5.653 2.487l2.893.58c.751.154 1.087.335 1.235.461.11.093.235.242.235.577 0 .317 0 1.057-1.87 1.057-.87 0-1.527-.167-1.954-.497-.41-.317-.66-.816-.757-1.524l-.068-.48H0l.041.598c.19 2.734 1.157 4.829 2.877 6.225C4.61 23.302 7.03 24 10.108 24c3.078 0 5.65-.68 7.361-2.022 1.755-1.377 2.647-3.379 2.647-5.951 0-2.004-.622-3.606-1.848-4.76ZM37.51 2.573C35.963 1.23 33.624.55 30.56.55h-8.814v22.902h7.216v-6.529h1.628c6.165 0 9.291-2.765 9.291-8.217 0-2.702-.797-4.765-2.372-6.132h.001ZM32.7 8.736c0 .636-.14 1.076-.415 1.309-.21.177-.668.39-1.664.39h-1.659V7.037h1.659c.996 0 1.455.212 1.664.39.275.232.415.672.415 1.308ZM49.305.549H41.82v22.902h7.485V.549Zm10.167 0h-7.485v22.902h16.175l.674-6.38h-9.364V.548ZM77.836 17.07V.55H70.35v22.902h16.175l.674-6.38h-9.364Z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h87.2v24H0z"></path></clipPath></defs></svg>
          </div>


          <div className="flex-1">
            <p className="uppercase text-[#efcf37]  font-bold md:mb-6">Support</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-400 hover:text-orange-500">FAQ</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-400 hover:text-orange-500">Help</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-400 hover:text-orange-500">Community Guidelines</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-[#efcf37]  font-bold md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-400 hover:text-orange-500">Terms of Service</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-400 hover:text-orange-500">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-[#efcf37]  font-bold md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-400 hover:text-orange-500">Facebook</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-400 hover:text-orange-500">Linkedin</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-400 hover:text-orange-500">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-[#efcf37]  font-bold md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-400 hover:text-orange-500">Blog</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-400 hover:text-orange-500">About Us</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-400 hover:text-orange-500">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <View className="bg-[#0b7b03] w-full items-center justify-center h-8">
        <Text className="font-bold">2023 © Spill App. All rights reserved.</Text>
      </View>
    </View>
  )
}


export default FooterComponent