import '../styles/globals.css'
import { Navigation } from '../components/Navigation';
import { space_grotesk } from './font';

export default function RootLayout({ children }) {
 return (
    <html lang='en'>
      <head>
        <title>My first app wirth Next 13</title>
      </head>
      <body className={space_grotesk.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}