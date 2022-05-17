import React, { useState } from 'react';
import Header from '../components/Header';
import { useForm } from 'react-hook-form';
import TimePicker from 'react-time-picker';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  data,
  istanbulIlce,
  edirneIlce,
  alibeykoy,
  eyup,
  gaziosmanpasa,
  doktorlar,
  bolumler,
} from '../data/data';
import Cookies from 'js-cookie';

const RandevuAl = () => {
  const [value, onChange] = useState('10:00');
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      il: 'istanbul',
      ilce: 'Alibeyköy',
    },
  });
  const onSubmit = (data) => {
    const newRandevu = {
      id: Math.floor(Math.random() * Date.now()),
      hastaAdi: data.hastaAdi,
      hastaSoyadi: data.hastaSoyadi,
      email: data.email,
      telefon: data.telefon,
      tcNo: data.tcNo,
      doktorAdi: data.doktorAdi,
      il: data.il,
      ilce: data.ilce,
      randevuSaati: value,
      hastaneAdi: data.hastaneAdi,
      bolum: data.bolum,
    };

    if (!Cookies.get('randevular')) {
      Cookies.set('randevular', JSON.stringify(data));
    }
    try {
      const existCookie = JSON.parse(Cookies.get('randevular'));
      existCookie.push(newRandevu);
      Cookies.set('randevular', JSON.stringify(existCookie));
      toast.success('Randevu Başarıyla Oluşturuldu');
    } catch (e) {
      toast.error(
        'Randevu alınırken bir hata oluştu,sonra tekrar deneyiniz' + e.message
      );
    } finally {
      reset();
    }
  };

  return (
    <div className="font-mono">
      <Header />
      <div className="w-full flex items-center justify-center mt-[20px] ">
        <ToastContainer />
        <form
          className="flex flex-col gap-4 w-[700px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1">
            <span className="font-serif text-sm">Hasta Adı</span>
            <input
              className="border-2 border-gray-500"
              {...register('hastaAdi', { required: true })}
            />
            {errors.hastaAdi && (
              <span className="text-[12px] text-red-600">
                Bu alan gereklidir !
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-serif text-sm">Hasta Soyadı</span>
            <input
              className="border-2 border-gray-500"
              {...register('hastaSoyadi', { required: true })}
            />
            {errors.hastaSoyadi && (
              <span className="text-[12px] text-red-600">
                Bu alan gereklidir !
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-serif text-sm">E-mail</span>
            <input
              className="border-2 border-gray-500"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-[12px] text-red-600">
                Bu alan gereklidir !
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-serif text-sm">Telefon</span>
            <input
              className="border-2 border-gray-500"
              {...register('telefon', { required: true })}
            />
            {errors.telefon && (
              <span className="text-[12px] text-red-600">
                Bu alan gereklidir !
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-serif text-sm">Tc No</span>
            <input
              className="border-2 border-gray-500"
              {...register('tcNo', {
                required: true,
                minLength: 11,
                maxLength: 11,
              })}
            />
            {errors.tcNo && (
              <span className="text-[12px] text-red-600">
                Tc No 11 harfli olmalıdır !
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 ">
            <span className="font-serif text-sm">Randevu Saati</span>
            <TimePicker
              className="border-2 border-gray-600"
              onChange={onChange}
              value={value}
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-serif text-sm">İl</span>
            <select className="border-2 border-gray-600" {...register('il')}>
              <option value="istanbul">İstanbul</option>
              <option value="edirne">Edirne</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-serif text-sm">İlçe</span>
            <select className="border-2 border-gray-600" {...register('ilce')}>
              {watch('il') === 'istanbul'
                ? istanbulIlce.map((ilce, index) => (
                    <option key={index} value={ilce}>
                      {ilce}
                    </option>
                  ))
                : edirneIlce.map((ilce, index) => (
                    <option key={index} value={ilce}>
                      {ilce}
                    </option>
                  ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-serif text-sm">Hastane Adı</span>
            <select
              className="border-2 border-gray-600"
              {...register('hastaneAdi')}
            >
              {watch('ilce') === 'Alibeyköy'
                ? alibeykoy.map((hastane, index) => (
                    <option key={index} value={hastane}>
                      {hastane}
                    </option>
                  ))
                : watch('ilce') === 'Eyüp'
                ? eyup.map((hastane, index) => (
                    <option key={index} value={hastane}>
                      {hastane}
                    </option>
                  ))
                : watch('ilce') === 'Gaziosmanpaşa'
                ? gaziosmanpasa.map((hastane, index) => (
                    <option key={index} value={hastane}>
                      {hastane}
                    </option>
                  ))
                : alibeykoy.map((hastane, index) => (
                    <option key={index} value={hastane}>
                      {hastane}
                    </option>
                  ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-serif text-sm">Bölüm Adı</span>
            <select className="border-2 border-gray-600" {...register('bolum')}>
              {bolumler.map((bolum, index) => (
                <option key={index} value={bolum}>
                  {bolum}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-serif text-sm">Doktor Adı</span>
            <select
              className="border-2 border-gray-600"
              {...register('doktorAdi')}
            >
              {doktorlar.map((doktor, index) => (
                <option key={index} value={doktor}>
                  {doktor}
                </option>
              ))}
            </select>
          </div>

          <input
            className="text-[24px]  bg-black/100 text-white cursor-pointer hover:scale-90 transition-all ease-in-out p-2"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default RandevuAl;
