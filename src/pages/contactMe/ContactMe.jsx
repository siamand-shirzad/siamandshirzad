import React from 'react';
import { Form, Formik } from 'formik';
import FormikControl from '../../components/formikElements/FormikControl';
import axios from 'axios';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import SocialLinks from '../../components/footer/SocialLinks';
import { Send } from 'lucide-react';

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
  });

  const onSubmit = async (values, actions) => {
    const sendPromise = axios.post('https://api.web3forms.com/submit', {
      access_key: 'e7732b83-2b09-4688-9a5a-35fce32dad84',
      name: values.name,
      email: values.email,
      message: values.message
    });

    toast.promise(
      sendPromise,
      {
        pending: "Sending your message...",
        success: "Your message has been sent successfully ",
        error: "Failed to send your message ",
      },
      {
        position: "top-right",
        hideProgressBar: false,
        pauseOnHover: true,
      }
    );

    try {
      const res = await sendPromise;
      if (res.data.success) {
        actions.resetForm();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  return (
    <section className=" flex items-center justify-center  px-4 relative z-10">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm"
      >
        
        {/* --- left side --- */}
        <div className="p-10 flex flex-col justify-between bg-linear-to-br from-indigo-950 via-[#1a1a2e] to-[#141417]">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let's stay in <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-400">
                Touch
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Feel free to reach out through the form, or contact me directly via social platforms. 
              If you have any suggestions & feedbacks, I’d love to hear them too.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-widest opacity-70">Find me on</p>
            <div className="flex gap-4">
               <SocialLinks className="text-3xl text-gray-400 hover:text-white transition-all hover:scale-110" />
            </div>
          </div>
        </div>

        <div className="bg-[#141417] p-8 md:p-12 flex flex-col justify-center">
          
          <h1 className="text-3xl font-bold text-center text-white mb-2">Contact Me</h1>
          <p className="text-gray-400 text-center mb-8">Send me a message directly from here.</p>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {formik => (
              <Form className="space-y-5" noValidate>
                <FormikControl control="input" name="name" type="text" label="Name" {...formik} />
                <FormikControl control="input" name="email" type="email" label="Email" />
                <FormikControl control="textarea" name="message" label="Message" />
                
                {/* دکمه گرادینت جدید */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formik.isSubmitting}
                  type="submit"
                  className="w-full mt-4 cursor-pointer flex justify-center items-center gap-2 py-4 px-6 bg-linear-to-r from-indigo-600 to-cyan-600 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formik.isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </Form>
            )}
          </Formik>
        </div>

      </motion.div>
    </section>
  );
};

export default Contact;