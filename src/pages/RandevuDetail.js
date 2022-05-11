import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';
import {
  istanbulIlce,
  edirneIlce,
  alibeykoy,
  eyup,
  gaziosmanpasa,
  bolumler,
  doktorlar,
  iller,
} from '../data/data';
import Cookies from 'js-cookie';
const RandevuDetail = () => {
  let { id } = useParams();

  const [randevu, setRandevu] = useState();

  const { control, handleSubmit, watch, register } = useForm({
    defaultValues: {
      il: 'istanbul',
    },
  });
  useEffect(() => {
    const randevular = JSON.parse(Cookies.get('randevular'));
    setRandevu(randevular.find((randevu) => randevu.id === parseInt(id)));
  }, [id]);

  const onSubmit = (data) => console.log(data);

  return (
    <div className="font-mono">
      <Header />
      {randevu ? (
        <form
          className="mt-[50px] flex flex-col justify-center items-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="hastaAdi"
            defaultValue={randevu.hastaAdi}
            control={control}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                label="Hasta Adı"
                variant="outlined"
                className="w-[400px]"
                {...field}
              />
            )}
          />
          <Controller
            name="hastaSoyadi"
            defaultValue={randevu.hastaSoyadi}
            control={control}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                label="Hasta Adı"
                variant="outlined"
                className="w-[400px]"
                {...field}
              />
            )}
          />

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
          <input type="submit" />
        </form>
      ) : (
        'Loading'
      )}
    </div>
  );
};

export default RandevuDetail;
