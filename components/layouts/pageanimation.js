import { motion } from 'framer-motion'

const AnimationLayout = ({ children }) => {
    return (
        <motion.div>
            {children}
        </motion.div>
    )
}

export default AnimationLayout