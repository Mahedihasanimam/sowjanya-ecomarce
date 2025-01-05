'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { Input, message } from 'antd';
import signupimg from '../../../public/images/otpimg.png';
import logo from '../../../public/images/mainlogo.png';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForgetpasswordMutation, useVerifyEmailMutation } from '@/redux/features/users/UserApi';

function OtpVerificationContent() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [verifyEmail] = useVerifyEmailMutation();
  const [forgetpassword] = useForgetpasswordMutation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const router = useRouter();

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  useEffect(() => {
    const queryEmail = searchParams.get("email");
    if (queryEmail) {
      setEmail(queryEmail);
    }
  }, [searchParams]);

  const handleVerify = async () => {
    const completeOtp = otp.join('');
    if (completeOtp.length === 4) {
      try {
        const response = await verifyEmail({ otp: completeOtp });
        if (response?.data?.status === 'success') {
          router.push(`/auth/resetpassword?email=${encodeURIComponent(email)}`);
          message.success(response?.data?.message);
        }
        if (response?.error) {
          message.error(response?.error?.data?.error);
        }
      } catch (error) {
        message.error(error?.data?.error);
      }
    }
  };

  const handleResend = async () => {
    try {
      const response = await forgetpassword({ email });
      if (response?.data?.status === 'success') {
        message.success(response?.data?.message);
      }
      if (response?.error) {
        message.error(response?.error?.data?.error);
      }
    } catch (error) {
      message.error(error?.data?.error);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex">
      <div className="lg:w-1/2 p-8 bg-primary flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Verify email</h1>
            <p className="text-gray-400">We have sent 4 digits code at {email}</p>
          </div>
          <div className="flex justify-center gap-2">
            {otp.map((digit, index) => (
              <Input
                placeholder="0"
                key={index}
                style={{ backgroundColor: '#1a1a1a' }}
                ref={inputRefs[index]}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-14 h-14 text-center text-2xl border-[#333] text-white rounded"
                maxLength={1}
              />
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={handleResend}
              className="text-[#D4B57E] hover:text-[#C4A56E] text-sm"
            >
              Send again
            </button>
          </div>
          <button
            onClick={handleVerify}
            disabled={otp.some((digit) => !digit)}
            className="w-full bg-[#D4B57E] hover:bg-[#C4A56E] disabled:opacity-50 
                     disabled:hover:bg-[#D4B57E] text-black font-medium h-12 
                     rounded transition-colors"
          >
            Verify
          </button>
        </div>
      </div>
      <div className="hidden lg:block w-1/2 relative">
        <Image
          src={signupimg}
          alt="Fashion model"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

export default function OtpVerification() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtpVerificationContent />
    </Suspense>
  );
}
