import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
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
} from '../data/data';
import Cookies from 'js-cookie';
import TimePicker from 'react-time-picker';
const RandevuDetail = () => {
  let { id } = useParams();

  const [randevu, setRandevu] = useState();
  const [value, onChange] = useState('12:00');

  const { control, handleSubmit, watch, register } = useForm({
    defaultValues: {
      il: 'istanbul',
    },
  });
  useEffect(() => {
    const randevular = JSON.parse(Cookies.get('randevular'));
    setRandevu(randevular.find((randevu) => randevu.id === parseInt(id)));
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    const editedRandevu = {
      id: randevu.id,
      hastaAdi: data.hastaAdi,
      hastaSoyadi: data.hastaSoyadi,
      email: data.email,
      telefon: data.telefon,
      tcNo: data.tc,
      il: data.il,
      ilce: data.ilce,
      doktorAdi: data.doktorAdi,
      bolum: data.bolum,
      hastaneAdi: data.hastaneAdi,
      randevuSaati: value,
    };

    try {
      const randevular = JSON.parse(Cookies.get('randevular'));
      const deletedRandevular = randevular.filter(
        (randevu) => randevu.id !== parseInt(id)
      );
      deletedRandevular.push(editedRandevu);
      Cookies.set('randevular', JSON.stringify(deletedRandevular));
      toast.success('Randevu Güncellendi.');
      setTimeout(() => window.location.reload(), 4000);
    } catch (e) {
      toast.error('Randevu Güncellenirken bir hata oluştu.');
      console.log(e);
    }
  };

  return (
    <div className="font-mono mb-8">
      <Header />
      <ToastContainer />
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
          <Controller
            name="email"
            defaultValue={randevu.email}
            control={control}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                className="w-[400px]"
                {...field}
              />
            )}
          />
          <Controller
            name="telefon"
            defaultValue={randevu.telefon}
            control={control}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                label="Telefon"
                variant="outlined"
                className="w-[400px]"
                {...field}
              />
            )}
          />
          <Controller
            name="tc"
            defaultValue={randevu.tcNo}
            control={control}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                label="Tc"
                variant="outlined"
                className="w-[400px]"
                {...field}
              />
            )}
          />
          <div className="flex flex-col gap-2 ">
            <span className="font-serif text-sm">Randevu Saati</span>
            <TimePicker
              className="border-2 border-gray-600"
              onChange={onChange}
              value={value}
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <Controller
              name="ilValue"
              defaultValue={randevu.il}
              control={control}
              render={({ field }) => (
                <TextField
                  disabled
                  id="outlined-basic"
                  label="İl"
                  variant="outlined"
                  className="w-[400px]"
                  {...field}
                />
              )}
            />
            <div className="flex flex-col mb-4  ">
              <span className="font-serif text-sm">İl</span>
              <select
                className="border-2 border-gray-600 w-[400px] h-[50px]"
                {...register('il')}
              >
                <option value="istanbul">İstanbul</option>
                <option value="edirne">Edirne</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <Controller
              name="ilceValue"
              defaultValue={randevu.ilce}
              control={control}
              render={({ field }) => (
                <TextField
                  disabled
                  id="outlined-basic"
                  label="İlçe"
                  variant="outlined"
                  className="w-[400px]"
                  {...field}
                />
              )}
            />
            <div className="flex flex-col gap-2 mb-8">
              <span className="font-serif text-sm">İlçe</span>
              <select
                className="border-2 border-gray-600 w-[400px] h-[50px]"
                {...register('ilce')}
              >
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
          </div>

          <div className="flex flex-row items-center justify-center gap-2">
            <Controller
              name="hastaneAdiValue"
              defaultValue={randevu.hastaneAdi}
              control={control}
              render={({ field }) => (
                <TextField
                  disabled
                  id="outlined-basic"
                  label="Hastane Adi"
                  variant="outlined"
                  className="w-[400px]"
                  {...field}
                />
              )}
            />
            <div className="flex flex-col gap-2 mb-6">
              <span className="font-serif text-sm">Hastane Adı</span>
              <select
                className="border-2 border-gray-600 w-[400px] h-[50px] "
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
          </div>

          <div className="flex flex-row items-center justify-center gap-2">
            <Controller
              name="bolumAdiValue"
              defaultValue={randevu.bolum}
              control={control}
              render={({ field }) => (
                <TextField
                  disabled
                  id="outlined-basic"
                  label="Bölüm Adı"
                  variant="outlined"
                  className="w-[400px]"
                  {...field}
                />
              )}
            />
            <div className="flex flex-col gap-2 mb-6">
              <span className="font-serif text-sm">Bölüm Adı</span>
              <select
                className="border-2 border-gray-600 w-[400px] h-[50px]"
                {...register('bolum')}
              >
                {bolumler.map((bolum, index) => (
                  <option key={index} value={bolum}>
                    {bolum}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-2">
            <Controller
              name="doktorAdiValue"
              defaultValue={randevu.doktorAdi}
              control={control}
              render={({ field }) => (
                <TextField
                  disabled
                  id="outlined-basic"
                  label="Doktor Adı"
                  variant="outlined"
                  className="w-[400px]"
                  {...field}
                />
              )}
            />
            <div className="flex flex-col gap-2 mb-6">
              <span className="font-serif text-sm">Doktor Adı</span>
              <select
                className="border-2 border-gray-600 w-[400px] h-[50px]"
                {...register('doktorAdi')}
              >
                {doktorlar.map((doktor, index) => (
                  <option key={index} value={doktor}>
                    {doktor}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <input
            className="bg-green-500 p-3 rounded-lg cursor-pointer transition-all hover:scale-90 ease-in-out font-bold text-white/95"
            value="Güncelle"
            type="submit"
          />
        </form>
      ) : (
        'Loading'
      )}
    </div>
  );
};

export default RandevuDetail;
